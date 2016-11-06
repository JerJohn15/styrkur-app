define('views/freerun/history-session',
    [
        'base/base-view',
        'templates/freerun/history-session.html',
        'views/freerun/history-session-item'
        ,'moment'
    ],
    function(BaseView, Template, ItemView){
    'use strict';

    var View = BaseView.extend({

            initialize: function(opt){
                var _this = this;
                _this.options = _.extend(_this.options || {}, opt);

                _this.children = [];
            },
        
            Template: Template,

            render: function(){
                var _this = this,
                    instanceId = _this.model.get('id');

                _this.options.formatedDate = moment(_this.model.get('date') ).format( App.enums.units.dateTime() );
                
                View.__super__.render.apply(_this, arguments);

                _this.addExercises();

                return _this;
            },

            addExercises: function(){
                var _this = this,
                    els = [];

                _this.model.get('exercises').each(function(exercise){
                    var exId = exercise.get('id'),
                        muscleId = exercise.get('muscle'),
                        movementId = exercise.get('exercise'),
                        muscle = _this.options.muscles.findWhere({id: muscleId}),
                        movement = _this.options.movements.findWhere({id: movementId}),
                        view = new ItemView({
                                musclename: muscle.get('name'),
                                movementname: movement.get('name')
                            });

                    view.model = exercise;

                    _this.children.push(view);
                    els.push(view.render().el);

                });

                _this.$('.exercise-history-list').append(els);

            },

            events: {
                'click .btn-back': 'go-back'
            },

            'go-back': function(e){
                e.preventDefault();

                window.history.back();
            },

            Close: function(){
                var _this = this;
                _.each(_this.children, function(child){
                    child.Close();
                });
                _this.children = [];

                View.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return View;
    
});