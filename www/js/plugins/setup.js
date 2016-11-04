define('plugins/setup', 
    [
        'jquery',
        'underscore'
    ], 
    function($, _){
    'use strict';
    
    var _versionNewerThan = function(ver, against){
            var _this = this,
                versionSplit = against.split('.'),
                checkVerSplit = ver.split('.'),
                done = false,
                i = 0,
                l = checkVerSplit.length,
                newer = false;

            while(i < l){
                if(versionSplit[i] === undefined && checkVerSplit[i] === undefined){
                    newer = false;
                    break;
                }
                else if(versionSplit[i] === undefined){
                    newer = true;
                    break;
                }
                else if(checkVerSplit[i] === undefined){
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) < parseInt(checkVerSplit[i])) {
                    newer = false;
                    break;
                } else if(parseInt(versionSplit[i]) > parseInt(checkVerSplit[i])){
                    newer = true;
                    break;
                }
                i++;
            }

            return newer;
        },

        _createWorkout = function(cfg){
            if(!cfg || ! cfg.workout){
                return false;
            }

            var deferred = new $.Deferred();

            require(['models/workout', 'workoutplans/' + cfg.workout], function(Model, Workout){
                var model = new Model(Workout);
                debugger;
                model.sync('create', model, {
                    success: function(mdl){
                        debugger;
                        App.User.set('workout', model.id);
                        if(!cfg.silent){
                            App.toast('success', 'Successfully added workout.');
                        }
                        _getDefaultWorkout(deferred);
                    },
                    error: function(){
                        debugger;
                        console.log('Error loading workout, "' + cfg.workout + '"', arguments);
                        if(!cfg.silent){
                            App.toast('error', 'Failed loading workout.');
                        }
                        deferred.reject();
                    }
                });
            });

            return deferred;
        },
        _createMeasurements = function(){
            
            var deferred = new $.Deferred();

            require(['models/body-part', 'workoutplans/measurements'], function(Model, BodyParts){
                var count = 0,
                    length = BodyParts.length,
                    onComplete = function(){
                        if(++count === length){
                            deferred.resolve();
                        }
                    };

                _.each(BodyParts, function(Bodypart){
                    var model = new Model(Bodypart);

                    model.sync('create', model, {
                        success: onComplete,
                        error: function(){
                            console.log('Failed to add bodypart to sql');
                            deferred.resolve();
                        }
                    });

                });
            });

            return deferred;
        },
        _getDefaultWorkout = function(prevDeferred){
            var deferred = prevDeferred || new $.Deferred();
            require(['models/workout'], function(Model){
                var model = new Model({ id: App.User.get('workout') });

                model.fetch({
                    success: function(){
                        App.Workout = model;
                        deferred.resolve();
                    },
                    error: function(){
                        console.log('Failed to load workout..');
                        deferred.resolve();
                    }
                });
            });

            return deferred.promise();
        },
        _getUser = function(){
            var _this = this,
                setUser = function(collection, arr, options){
                    var user;
                    if(collection.length){
                        user = collection.pop();

                        App.setColorPalette(user.get('colorpalette') || 'blue' );

                        deferred.resolve({firstTime: false, user: user});
                    }
                    else {
                        user = collection.create({ name: 'User' });

                        var onTutorialComplete = function(){
                            App.setColorPalette(user.get('colorpalette') || 'blue' );
                            
                            deferred.resolve({ firstTime: true, user: user });
                        };

                        require(['views/tutorial/tutorial'],function(TutorialView){
                            var view = new TutorialView();
                            view.model = user;

                            view.options.onComplete = onTutorialComplete;

                            document.body.appendChild(view.render().el);
                        });
                    }
                },
                deferred = new $.Deferred();

            require(['collections/users'], function (Collection) {
                var collection = new Collection();
                collection.fetch({
                    limit: 1,
                    success: setUser,
                    error: function(){
                        console.log('Failed to get users..');
                        setUser();
                    }
                });
            });

            return deferred.promise();
        }, 
        _doUpdates = function(version, deferred){

            if(_versionNewerThan(version, '1.1.2')){
                //Create workouts..
                require(['plugins/movements'], function(Movements){
                    Movements.load()
                        .then(function(){
                            _doUpdates('1.1.2', deferred);
                        });
                });
            }
            else if(_versionNewerThan(version, '1.1.4')){
                //Create workouts..
                _doUpdates('1.1.4', deferred);
            }
            else {
                deferred.resolve(version);
            }
        };


    return {
        init: function(){
            //Check what version the sql is.. run updates if necessary return current version 
            var deferred = new $.Deferred(),
                measurements = function(programname){
                    _createMeasurements(programname)
                        .then(appInfo);
                },
                appInfo = function(){
                    require(['models/appinfo'], function(AppInfo){
                        var appInformation = new AppInfo({ id: 0 });
                        appInformation.fetch({
                            success: function(){
                                var version = appInformation.get('version');
                                var updDeferred = $.Deferred();

                                updDeferred.promise().then(function(version){
                                    appInformation.set('version', version);
                                    appInformation.sync('update', appInformation, { success: function(){} });

                                    deferred.resolve({version: version });
                                });

                                _doUpdates(version, updDeferred);
                            },
                            error: function(){
                                var updDeferred = $.Deferred();

                                updDeferred.promise().then(function(version){
                                    appInformation.set('version', version);
                                    appInformation.sync('update', appInformation, { success: function(){} });

                                    deferred.resolve({version: version });
                                });

                                _doUpdates('0.0.0', updDeferred);
                            }
                        });
                    });
                };

            _getUser()
                .then(function(data){
                    App.User = data.user;
                    App.User.on('change', function(){
                            App.User.sync('update', App.User, { success: function(){} });
                            App.setColorPalette(App.User.get('colorpalette') || 'blue' );
                        });
                    console.log(App.User.attributes);

                    if(data.firstTime){
                        //TODO: find out what exercise fits this person the best!
                        _createWorkout({ silent: true, workout: 'simple3split' })
                            .then(function(){
                                measurements('simple3split');
                            });
                    }else{
                        _getDefaultWorkout()
                            .then(appInfo);
                    }
                });

            return deferred;
        },

    };

});