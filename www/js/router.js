define(['backbone'], function(Backbone){
    'use strict';

    return Backbone.Router.extend({
        routes: {
            '(/)': 'dashboard',

            'about(/)': 'about',
            'about/license(/)': 'license',
            'settings(/)': 'settings',
            'workout(/)': 'workout',
            'workout/:id(/)': 'do-workout',

            /* Free workout */
            'freerun(/)': 'freerun',
            'freerun/history(/)': 'freerun-history',
            'freerun/history/:id(/)': 'freerun-history-item',

            /* Plans */
            'plan(/)': 'plan',
            'plan/list(/)': 'plan-list',

            /* History */
            'history/graph/:id(/)': 'history-graph',
            'history/session/:id(/)': 'history-sessions',
            'history/exercises/:parent/:id(/)': 'history-exercises',

            /* Create */
            'create/workout(/)': 'create-workout',
            'create/wizard/:id(/)': 'create-wizard',
            'create/wizard/:id/exercises/:exid(/)': 'create-exercise',

            /* Measurements */
            'measurements(/)': 'measurements',
            'measurements/add(/)': 'measurements-add',
            'measurements/addpart(/)': 'measurements-addpart'
        },

        initialize: function(){
        },
    
        'dashboard': function () {
            App.Events.trigger('navigate:done', 'home');
            require(['views/dashboard'], function (View) {
                App.showView(new View());
            });
        },

        'about': function(){
            App.Events.trigger('navigate:done', 'about');
            require(['views/about'], function (View) {
                App.showView(new View());
            });
        },

        'license': function(){
            App.Events.trigger('navigate:done', 'about');
            require(['views/license'], function (View) {
                App.showView(new View());
            });
        },
        
        'plan': function () {
            App.Events.trigger('navigate:done', 'plan');
            require(['views/plan/plan'], function (View) {
                App.showView(new View());
            });
        },

        'plan-list': function(){
            App.toggleLoader(true);

            require(['views/plan/server-list','collections/serveritems'], function (View, Collection) {
                var view = new View(),
                    collection = new Collection();
                view.collection = collection;
                
                view.collection.fetch({
                    success: function(){
                        App.toggleLoader(false);
                        App.showView(view);
                    }
                });
            });
        },

        'workout': function(){
            App.Events.trigger('navigate:done', 'workout');
            require(['views/workout'], function (View) {
                var view = new View(),
                    currentPlan = App.User.get('workout'),
                    noPlan = function(){
                        console.log('User has no plan!');
                        App.toast('info', 'No workout plan selected');
                    };

                if(currentPlan === undefined){
                    noPlan();
                } else {
                    view.model = App.Workout;
                    App.showView(view);
                }

            });
        },

        'do-workout': function(id){
            require(['views/exercises'], function(View){
                var view = new View();
                view.model = App.Workout.get('sessions').findWhere({id: id});
                view.parentModel = App.Workout;

                App.showView(view);
            });

        },

        /* Free-run start */

        'freerun': function(){
            require([
                    'views/freerun/freerun', 
                    'models/session-instance',
                    'collections/movements', 
                    'collections/muscles'
                ], function(View, Model, MoveColl, MuscColl){

                var movements = new MoveColl(),
                    muscles = new MuscColl(),
                    view = new View({
                        muscles: muscles,
                        movements: movements
                    }),
                    onDone = function () {
                        if(muscles.loaded && movements.loaded){
                            App.showView(view, 'main');
                        }
                    };

                view.model = new Model({ parent: '11111111-1111-1111-1111-111111111111' });

                muscles.fetch({
                    success: function(){
                        muscles.loaded = true;
                        onDone();
                    }
                });
                movements.fetch({
                    success: function(){
                        movements.loaded = true;
                        onDone();
                    }
                });

            });
        },

        'freerun-history': function(){
            require([
                    'views/freerun/freerun-history-list',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = view.collection = new Collection();

                collection.fetch({
                    filters: { parent: '11111111-1111-1111-1111-111111111111' },
                    success: function(){
                        App.showView(view);
                    },
                    error: function(){
                        App.toast('info', 'Could not get history');
                    }
                });

            });
        },

        'freerun-history-item': function(id){
            require([
                    'views/freerun/history-session',
                    'models/session-instance',
                    'collections/movements', 
                    'collections/muscles'
                ], function(View, Model, MoveColl, MuscColl){
                    
                var movements = new MoveColl(),
                    muscles = new MuscColl(),
                    model = new Model({ id: id }),
                    view = new View({
                        muscles: muscles,
                        movements: movements
                    }),
                    onDone = function () {
                        if(model.loaded && muscles.loaded && movements.loaded){
                            App.showView(view, 'main');
                        }
                    };

                view.model = model;

                view.model.fetch({
                    success: function(){
                        model.loaded = true;
                        onDone();
                    }
                });

                muscles.fetch({
                    success: function(){
                        muscles.loaded = true;
                        onDone();
                    }
                });
                movements.fetch({
                    success: function(){
                        movements.loaded = true;
                        onDone();
                    }
                });
            });
        },


        /* Free-run end */

        'settings': function () {
            App.Events.trigger('navigate:done', 'settings');
            require(['views/settings/settings'], function (View) {
                var view = new View();
                view.model = App.User;
                App.showView(view);
            });
        },

        //Is this in use??
        'session': function(id){
            require(['views/session','models/session'], function (View, Model) {
                var view = new View(),
                    model = new Model({ id: id });
                view.model = model;

                view.model.fetch({
                    success: function(){
                        App.showView(view);
                    }
                });
            });
        },

        /* History */
        'history-graph': function(id){
            require([
                    'views/history/graph-sessions',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = new Collection(),
                    onFetch = function(){
                        collection.fetch({
                            filters: { parent: id },
                            orderby: 'date',
                            ordertype: 'asc',
                            success: function(){
                                App.showView(view);
                            },
                            error: function(){
                                App.toast('error', 'Failed loading workout sessions');
                                console.log(arguments);
                            }
                        });
                    },
                    mdl = App.Workout.get('sessions').findWhere({ id: id });

                collection.asc = true;
                view.model = mdl;
                view.collection = collection;

                onFetch();
            });
        },

        'history-sessions': function(id){
            require([
                    'views/history/session-list',
                    'collections/session-instances'
                ], function (View, Collection) {
                var view = new View(),
                    collection = new Collection(),
                    onError = function(){
                        App.toast('error', 'Failed loading workout sessions');
                        console.log(arguments);
                    },
                    onModelComplete = function(){
                        collection.fetch({
                            filters: { parent: id },
                            success: function(){
                                view.collection = collection;
                                App.showView(view);
                            },
                            error: onError
                        });
                    },
                    mdl = App.Workout.get('sessions').findWhere({ id: id });

                view.model = mdl;
                onModelComplete();

            });
        },

        'history-exercises': function(sessionId, id){
            require([
                    'views/history/exercises',
                    'models/session-instance'
                ], function (View, Model) {
                var view = new View(),
                    session = App.Workout.get('sessions').findWhere({ id: sessionId }),
                    model = new Model({ id: id });

                view.session = session;
                view.model = model;

                view.model.fetch({
                    success: function(){
                        App.showView(view);
                    }
                });
            });
        },

        /* Create */

        'create-workout': function(){
            require(['views/create/workout'], function (View) {
                App.showView(new View());
            });
        },

        'create-wizard': function(id){
            require(['views/create/session', 'models/workout', 'collections/movements', 'collections/muscles'], function (View, Model, MoveColl, MuscColl) {
                var view = new View(),
                    movements = new MoveColl(),
                    muscles = new MuscColl(),
                    fetchCount = 0,
                    onDone = function () {
                        fetchCount++;
                        if(fetchCount === 3){
                            App.cache.showView(view, 'create' + id);
                        }
                    };
                view.model = new Model({ id: id });


                if(!App.cache.exists('create' + id)){
                    App.cache.init('create' + id, { 
                            model: view.model,
                            muscles: muscles,
                            movements: movements
                        }, {});

                    view.model.fetch({
                        success: onDone
                    });
                    muscles.fetch({
                        success: onDone
                    });
                    movements.fetch({
                        success: onDone
                    });
                } else {
                    App.cache.showView(view, 'create' + id);
                }
            });
        },

        'create-exercise': function(id, exid){
            require(['views/create/exercises', 'models/workout', 'collections/movements', 'collections/muscles'], function (View, Model, MoveColl, MuscColl) {
                var view = new View({ exerciseid: exid }),
                    movements = new MoveColl(),
                    muscles = new MuscColl(),
                    fetchCount = 0,
                    onDone = function () {
                        fetchCount++;
                        if(fetchCount === 3){
                            App.cache.showView(view, 'create' + id);
                        }
                    };
                view.model = new Model({ id: id });

                if(!App.cache.exists('create' + id)){
                    App.cache.init('create' + id, { 
                            model: view.model,
                            muscles: muscles,
                            movements: movements
                        }, {});

                    view.model.fetch({
                        success: onDone
                    });
                    muscles.fetch({
                        success: onDone
                    });
                    movements.fetch({
                        success: onDone
                    });
                } else {
                    App.cache.showView(view, 'create' + id);
                }

            });
        },

        /* Measurements */

        'measurements': function(){
            App.Events.trigger('navigate:done', 'measurements');
            require(['views/measurements/measurements'], function(View){
                var view = new View();

                App.showView(view);
                
            });
        },

        'measurements-add': function(){
            require(
                ['views/measurements/measurements-add','collections/body-parts'], 
                function(View, BodyParts){
                    var view = new View();
                    view.collection = new BodyParts();

                    view.collection.fetch({
                        success: function(){
                            App.showView(view);
                        }
                    });
                    
            });

        },

        'measurements-addpart': function(){
            require(['views/measurements/bodypart-add'], function(View){
                var view = new View();
                App.showView(view);
            });
        }

    });

});