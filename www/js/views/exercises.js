define('views/exercises',
    [
        'base/list-view',
        'templates/exercises.html',
        'models/session-instance',
        'views/exercise-item',
        'collections/session-instances',
        'backbone'
    ],
    function(BaseView, Template, Model, ExItemView, Collection, Backbone){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this,
            	sessionId = _this.model.get('id');
                
        	_this.instance = new Model({ parent: sessionId });
            //Filter exercises to enabled
        	_this.collection = new Backbone.Collection(_this.model.get('exercises').filter(function(item){
                    return item.get('enabled') === undefined || item.get('enabled');
                }));

            var allWorkouts = new Collection();

            allWorkouts.fetch({
                orderby: 'date',
                ordertype: 'desc',
                limit: 1,
                filters: { parent: _this.model.get('id') },
                success: function(){
                    _this.lastWorkout = allWorkouts.length ? allWorkouts.pop() : undefined;

                    _this.ItemView = ExItemView.extend({
                        options: {
                            lastWorkout : _this.lastWorkout
                        }
                    });
            
                    View.__super__.render.call(_this);
                }
            });

            return _this;
        },

        listSelector: '.exercise-list',

        events: {
        	'click .btn-save': 'save',
        	'click .btn-back': 'go-back'
        },

        'save': function(e){
        	e.preventDefault();

            var _this = this;

            _this.instance.set('comment', _this.$('textarea[name="comment"]').val());

            var exList = _this.instance.get('exercises');

            _.each(_this.children, function(view){
                exList.add(view.instance); 
            });

            var totalLifted = this.calcWeightLifted(exList);
            console.log(totalLifted);
            if(totalLifted > 0){
                _this.$('.weight-lifted').text(totalLifted + App.enums.units.weight());
            }
            else {
                _this.$('.welldone-box h2').text('Another workout well done!');
            }

            _this.instance.save(null, {
                success: function(attr){
                    _this.$('.welldone-box').addClass('in');

                    setTimeout(function() {
                        App.navigate('#/workout');
                    }, 2500);
                }
            });
        },

        calcWeightLifted: function (list) {
            var totalWeight = 0;
            list.each(function(item){
                item.get('sets').each(function(set){
                    var reps = set.get('reps');
                    var weight = set.get('weight');
                    var ireps = parseInt(reps);
                    var iweight = parseInt(weight);
                    if(reps && weight && ireps > 0 && iweight > 0){
                        totalWeight += ireps * iweight;
                    }
                    
                });
            });
            return totalWeight;
        },

        'go-back': function(e){
        	e.preventDefault();

            App.Events.trigger('workout-wizard:view', 'sessions');
        }
    
    });
    
    return View;
    
});