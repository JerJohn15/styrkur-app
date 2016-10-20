define('application',[
        'backbone', 
        'toastr',
        'plugins/cache',
        'plugins/bb-i18next'
        ,'backbone-wreqr'
    ], 
    function(Backbone, toastr, Cache, bbi18next){
    'use strict';
        
    var _showView = function (view, area) {
            area = area || 'main';
            var selectedArea = App.regions[area],
                onDone = function(){
                    document.querySelector(selectedArea.selector).appendChild(view.render().el);

                    view.el.classList.add('slide-in');
                    _once(view.el, 'animationend webkitAnimationEnd oAnimationEnd', function(){
                            view.el.classList.remove('slide-in');
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

                oldView.el.classList.add('slide-back');
                _once(oldView.el, 'animationend webkitAnimationEnd oAnimationEnd', function(){
                    oldView.Close();
                    if(callback){
                        callback();
                    }
                });
            }
        },
        _once = (function(){
            var eventListners = window.eventListners = {};

            return function(el, events, callback, context){
                var name = Date.now().getTime();
                var eventList = eventListners[name] = events.split(' ').map(function(evnt){
                    return {
                        evnt: evnt,
                        name: name,
                        cb: callback,
                        context: context || window
                    };
                });


                eventList.forEach(function(evnt){
                    var evntCB = evnt.eventCB = function(){
                            eventListners[evnt.name].forEach(function(evntItem){
                                el.removeEventListener(evntItem.evnt, evntItem.cb);
                            });
                            delete eventListners[evnt.name];
                            evnt.cb.apply(evnt.context, arguments);
                        };

                    el.addEventListener(evnt, evntCB, false);
                });
            }
        }()),
        _setColorPalette = (function(){ 
            var currentColor = '';
            return function(color){
                if(currentColor){
                    document.body.classList.remove('color-' + currentColor);
                }
                if(color){
                    currentColor = color;
                    document.body.classList.add('color-' + color);
                }
            };
        }()),
        _showNavMenu = function(){
            require(['components/menu'], function (Menu) {
                var $menu = document.querySelector('#site-nav');

                $menu.appendChild((new Menu()).render().el);
            });
        },
        _bindWorkoutListner = function(){
            App.Events.on('workout:changed', function(){
                _getDefaultWorkout();
            });
        },
        _bindTimer = function(){
            document.querySelector('.timer-toggle').addEventListener('click', function(e){
                e.preventDefault();
                App.openTimer();
            }, false);
        },
        _bindExternalLinks = function () {
            if(window.isMobile){
                document.body.addEventListener('click', function(e){
                    debugger;
                    var target = e.currentTarget;
                    if(target.tagName === 'A' && target.getAttribute('target') === '_blank'){
                        console.log('Browser called for ' + e.target.href);
                        e.preventDefault();
                        //window.open(e.target.href, '_system');
                        window.open(e.target.href, '_system', 'location=yes');
                    }
                }, false);
            }
        };

    return {

        version: '0.0.0',

        initialize: function (Router) {
            var _this = this,
                onSetupDone = function(){
                    var lang = _this.User.get('language') || 'en';
                    
                    _this.setLanguage(lang, onSyncComplete);
                },
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
                        onSetupDone();
                    });
            });
        },

        languages: {
            'en': 'English',
            'is': 'Íslenska'
        },

        setLanguage: function(lang, cb){
            bbi18next(lang, function(translate){
                window.App.translate = translate;
                if(cb){
                    cb();
                }
            });
        },

        vibrate: function(time){
            if('vibrate' in navigator){
                navigator.vibrate(time);
            }
        },

        toggleLoader: (function(){
            //Needs rewrite
            var parent = document.createElement('div');
            parent.innerHTML = '<div class="loader7-wrapper" style="display: none;"><div class="loader7"></div></div>';
            document.body.appendChild(parent.firstChild);

            return function toggleLoader (toggle) {
                    loader.toggle(toggle);
                };
        }()),

        navigate: function (url) {
            location.href = url;
        },

        title: function (title) {
            var items = document.querySelectorAll('title, #title');
            for(var i = 0; i < items.length; i++){
                items[i].innerText = title;
            }
        },

        showView: _showView,

        cache: new Cache(),

        message: function(msg){ //TODO use plugin??
            var p = document.createElement('p');
            p.innerText = msg;
            document.body.appendChild(p);
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
                    var _this = this;
                    Object.keys(_this).forEach(function(key) {
                        if(key === 'getAll'){ return; }
                        units[key] = _this[key]();
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
                    debugger;
                    _timerView.el.toggle();
                };

            return function(){
                if(!_timerView){
                    require(['views/timer'], function(View){
                        _timerView = new View();

                        document.body.appendChild(_timerView.render().el);

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