define('views/create/exercises',
    [
        'base/list-view',
        'views/create/exercise-item',
        'collections/exercises',
        'templates/create/exercises.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    'use strict';

    var View = ParentView.extend({

        initialize: function(cfg){
            this.options = _.extend(this.options || {}, cfg);

            return View.__super__.initialize.apply(this, arguments);
        },
    
        Template: Template,

        className: 'create-session-view',

        render: function(){
            var _this = this,
                sessionId = _this.options.exerciseid;


            var matchingSession = _this.model.model.get('sessions').findWhere({ id: sessionId });

            if(matchingSession){
                _this.collection = matchingSession.get('exercises');

                _this.options.title = matchingSession.get('name');
                _this.options.wotitle = _this.model.model.get('name');
                _this.options.movements = _this.model.movements;
                _this.options.muscles = _this.model.muscles;
            }

            View.__super__.render.apply(_this,arguments);

            _this.listenTo(_this.collection, 'add', function(){
                _this.reRenderChildren();
            });

            return _this;
        },

        listSelector: '.exercise-list',

        ItemView: ItemView,
        
        events: {
            'click .btn-save': 'save',
            'click .btn-add-exercise': 'add-exercise',
            'click .btn-back': 'go-back',
            'click .btn-toggle-disabled': 'toggleDisabled',
            'click .dropdown-toggle': 'toggleDropdown'
        },

        'add-exercise': function(e){
            e.preventDefault();

            this.collection.add({ order: ++this.topOrder });

            var parent = $(e.target).parent('.dropdown-menu');
            this.toggleDropdown(undefined, parent);
        },

        'toggleDropdown': function(e, dropdownEl){
            if(e){
                e.preventDefault();    
            }
            var dropdown;
            if(dropdownEl){
                dropdown = dropdownEl;
            }
            else { 
                var _this = this,
                    target = _this.$(e.currentTarget);
                dropdown = target.siblings('.dropdown-menu');
            }
            
            dropdown.toggle();
        },

        'toggleDisabled': function(e){
            e.preventDefault();
            var _this = this;

            _this.options.showDisabled = _this.model.showDisabled = !_this.model.showDisabled;

            _this.reRenderChildren();

            var parent = $(e.target).parent('.dropdown-menu');
            _this.toggleDropdown(undefined, parent);
        },

        'go-back': function(e){
            e.preventDefault();
            var _this = this,
                wid = _this.model.model.get('id');

            App.navigate('#/create/wizard/' + wid);
        },
        
        'save': function(e){
            if(e){
                e.preventDefault();
            }
            var _this = this;

            _this.model.model.sync('update', _this.model.model, {
                success: function(){
                    App.toast('success', 'Workout plan saved');
                    if(App.Workout && (App.Workout.get('id') === _this.model.model.get('id'))){
                        App.Workout = _this.model.model;
                    }
                },
                error: function(){
                    App.toast('danger','Something went wrong!');
                    console.log(arguments);
                }
            });
            
        }
    
    });
    
    return View;
    
});
