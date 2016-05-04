define('application',[
        'backbone', 
        'toastr',
        'underscore',
        'plugins/cache'
        ,'backbone-wreqr'
    ], 
    function(Backbone, toastr, _, Cache){
    'use strict';
        
    var _showView = function (view, area) {
            area = area || 'main';
            var selectedArea = App.regions[area],
                onDone = function(){
                    $(selectedArea.selector).append(view.render().el);
                    view.$el.addClass('slide-in')
                        .one('animationend webkitAnimationEnd oAnimationEnd', function(){
                            view.$el.removeClass('slide-in');
                        });

                    selectedArea.view = view;
                    return view;
                };


            if (!selectedArea) {
                console.log('Area not defined!');
                return;
            }

            if (selectedArea.view) {
                _closeView(area, onDone);
            }
            else{
                onDone();
            }

        },
        _closeView = function(area, callback){
            var selectedArea = App.regions.main; 
            
            if (selectedArea.view) {
                var oldView = selectedArea.view;
                selectedArea.view = undefined;

                oldView.$el.addClass('slide-back');
                oldView.$el.one('animationend webkitAnimationEnd oAnimationEnd', function(){
                    oldView.Close();
                    if(callback){
                        callback();
                    }
                });
            }
        },
        _setColorPalette = (function(){ 
            var currentColor = '';
            return function(color){
                if(currentColor){
                    $(document.body).removeClass('color-' + currentColor);
                }
                if(color){
                    currentColor = color;
                    $(document.body).addClass('color-' + color);
                }
            };
        }()),
        _showNavMenu = function(){
            require(['components/menu'], function (Menu) {
                var $menu = $('#site-nav');

                $menu.html((new Menu()).render().el);
            });
        },
        /* Deletable START */
        _getUser = function(onComplete){
            var _this = this,
                setUser = function(collection, arr, options){
                    if(collection.length){

                        _this.User = collection.pop();

                        _this.User.on('change', function(){
                            _this.User.sync('update', _this.User, { success: function(){} });
                            _setColorPalette(_this.User.get('colorpalette') || 'blue' );
                        });

                        _setColorPalette(_this.User.get('colorpalette') || 'blue' );

                        deferred.resolve({firstTime: false});
                    }
                    else {
                        _this.User = collection.create({ name: 'User' });

                        var onTutorialComplete = function(){
                            _this.User.on('change', function(){
                                _this.User.sync('update', _this.User, { success: function(){} });
                                _setColorPalette(_this.User.get('colorpalette') || 'blue' );
                            });
                            _setColorPalette(_this.User.get('colorpalette') || 'blue' );
                            
                            deferred.resolve({ firstTime: true });
                        };

                        require(['views/tutorial/tutorial'],function(TutorialView){
                            var view = new TutorialView();
                            view.model = _this.User;

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
                    success: setUser
                });
            });

            return deferred.promise();
        },
        _createWorkout = function(cfg){
            if(!cfg || ! cfg.workout){
                return false;
            }

            var deferred = new $.Deferred();

            require(['models/workout', 'workoutplans/' + cfg.workout], function(Model, Workout){
                var model = new Model(Workout);
                model.sync('create', model, {
                    success: function(){
                        App.User.set('workout', model.get('id'));
                        if(!cfg.silent){
                            App.toast('success', 'Successfully added workout.');
                        }
                        _getDefaultWorkout(deferred);
                    },
                    error: function(){
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
                        }
                    });

                });
            });

            return deferred;
        },
        _createMovements = function(){
            var _this = this;
            require(['collections/movements','plugins/movements'], function(movements, MovementsSetup){

            });
        },
        _getDefaultWorkout = function(prevDeferred){
            var deferred = prevDeferred || new $.Deferred();
            require(['models/workout'], function(Model){
                var model = new Model({ id: App.User.get('workout') });

                model.fetch({
                    success: function(){
                        App.Workout = model;
                        deferred.resolve();
                    }
                });
            });

            return deferred.promise();
        },
        /* DELETABLE END */
        _bindWorkoutListner = function(){
            App.Events.on('workout:changed', function(){
                _getDefaultWorkout();
            });
        },
        _bindTimer = function(){
            $('.timer-toggle').on('click', function(e){
                e.preventDefault();
                App.openTimer();
            });
        },
        _bindExternalLinks = function () {
            if(window.isMobile){
                $(document).on('click', 'a[target="_blank"]', function(e){
                    console.log('Browser called for ' + e.target.href);
                    e.preventDefault();
                    //window.open(e.target.href, '_system');
                    window.open(e.target.href, '_system', 'location=yes');
                });
            }
        };

    return {

        version: '0.0.0',

        initialize: function (Router) {
            var _this = this,
                onSyncComplete = function onSyncComplete(){
                    _showNavMenu.call(_this);

                    _bindTimer();
                    _bindExternalLinks();
                    _bindWorkoutListner();
                    
                    _this.router = new Router();

                    Backbone.history.start();
                };

            require(['plugins/setup'], function(Setup){
                Setup.init()
                    .then(function(data){
                        App.version = data.version;
                        onSyncComplete();
                    });
            });
        },

        vibrate: function(time){
            if('vibrate' in navigator){
                navigator.vibrate(time);
            }
        },

        toggleLoader: (function(){
            var loader = $('<div class="loader7-wrapper" style="display: none;"><div class="loader7"></div></div>');
            $(document.body).append(loader);

            return function toggleLoader (toggle) {
                    loader.toggle(toggle);
                };
        }()),

        navigate: function (url) {
            location.href = url;
        },

        title: function (title) {
            $('title, #title').text(title);
        },

        showView: _showView,

        cache: new Cache(),

        message: function(msg){ //TODO use plugin??
            $('body').append('<p>'+ msg +'</p>');
        },

        Events: new Backbone.Wreqr.EventAggregator(),
        
        regions: {
            main: {
                selector: '#container',
                view: undefined
            }
        },

        setColorPalette: _setColorPalette,

        toast: function(type, msg){
            if(toastr[type]){
                toastr[type](msg);
            } else {
                toastr.info(msg);
            }
        },

        uuid: function(){
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        },
        //Deletable?
        versionNewerThan: function(ver){
            var _this = this,
                version = _this.version,
                versionSplit = version.split('.'),
                checkVerSplit = ver.split('.'),
                done = false,
                i = 0,
                l = checkVerSplit.length,
                newer = false;

            while(i < l){
                if(versionSplit[i] === undefined){
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

        enums: {
            goals: {
                1: 'Build muscles',
                2: 'Loose weight',
                3: 'Get healthier',
                4: 'Other'
            },
            units: {
                weight: function(){ return (App.User.get('units') === 'metric') ? 'kg' : 'lbs'; },
                shortLength: function(){ return (App.User.get('units') === 'metric') ? 'cm' : 'inch'; },
                longLength: function(){ return (App.User.get('units') === 'metric') ? 'm' : 'feet'; },
                farLength: function(){ return (App.User.get('units') === 'metric') ? 'km' : 'mile'; },
                time: function(){ return 'min'; },
                beats: function(){ return 'bpm'; },
                percent: function(){ return '%'; },
                shortDate: function(){ return (App.User.get('units') === 'metric') ? 'DD/MM/YY' : 'MM/DD/YY'; },
                longDate: function(){ return (App.User.get('units') === 'metric') ? 'DD. MMMM YYYY' : 'MMMM DD YYYY'; },
                dateTime: function(){ return (App.User.get('units') === 'metric') ? 'DD/MM/YYYY HH:mm' : 'MM/DD/YYYY hh:mm a'; },
                shortDateTime: function(){ return (App.User.get('units') === 'metric') ? 'DD. MM YYYY HH:mm' : 'MM DD YYYY HH:mm'; },
                getAll: function(){
                    var units = {};
                    _.each(this, function(unit, key){
                        if(key === 'getAll'){ return; }
                        units[key] = unit();
                    });
                    return units;
                }
            },
            workoutTypes: {
                'weightrep': ['weight', 'reps'],
                'weight': ['weight'],
                'reps': ['reps'],
                'distance': ['distance'],
                'time': ['time'],
                'beats': ['beats']
            }
        },

        support: (function(){
            return {
                touchstart : ('ontouchstart' in document.documentElement) ? 'mousedown' : 'touchstart',
                touchend : ('touchend' in document.documentElement) ? 'mouseup' : 'touchend'
            };
        }()),

        openTimer: (function(){
            var _timerView,
                toggleView = function(){
                    _timerView.$el.toggle();
                };

            return function(){
                if(!_timerView){
                    require(['views/timer'], function(View){
                        _timerView = new View();

                        $(document.body).append(_timerView.render().el);

                        toggleView();
                    });
                }
                else {
                    toggleView();
                }
            };

        }())

    };

});