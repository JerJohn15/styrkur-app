define('views/history/exercises',
    [
        'base/base-view',
        'templates/history/exercises-list.html',
        'models/session',
        'collections/exercises',
        'collections/exercise-instances',
        'views/history/exercises-item',
        'base/base-view',
        'moment'
    ],
    function(BaseView, Template, SessionModel, ExerciseCollection, ExInsCollection, ItemView, DEVView){
    'use strict';

    var View = BaseView.extend({

            initialize: function(){
                this.children = [];
            },
        
            Template: Template,

            render: function(){
                var _this = this,
                    instanceId = _this.model.get('id'),
                    sessionId = _this.model.get('session');

                _this.options = {
                    session: _this.session.toJSON(),
                    formatedDate : moment(_this.model.get('date') ).format( App.enums.units.dateTime() )
                }
                View.__super__.render.apply(_this, arguments);

                _this.addExercises(sessionId, instanceId);

                return _this;
            },

            addExercises: function(sessionId, instanceId){
                var _this = this,
                    els = [];

                _this.session.get('exercises').each(function(exercise){
                    var view = new ItemView,
                        exId = exercise.get('id'),
                        instance = _.find(_this.model.get('exercises'), function(it){ return it.exercise === exId; });

                    if(!instance)
                        return;

                    view.model = {
                        exercise : exercise.toJSON(),
                        instance: instance
                    };

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