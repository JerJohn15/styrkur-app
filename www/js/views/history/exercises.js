define('views/history/exercises',
    [
        'base/base-view',
        'templates/history/exercises-list.html',
        'models/session',
        'collections/exercises',
        'collections/exercise-instances',
        'views/history/exercises-item',
        'moment'
    ],
    function(BaseView, Template, SessionModel, ExerciseCollection, ExInsCollection, ItemView){
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
                };

                View.__super__.render.apply(_this, arguments);

                _this.addExercises(sessionId, instanceId);

                return _this;
            },

            addExercises: function(sessionId, instanceId){
                var _this = this,
                    els = [];

                _this.session.get('exercises').each(function(exercise){
                    var view = new ItemView(),
                        exId = exercise.get('id'),
                        instance = _this.model.get('exercises').findWhere({ 'exercise': exId });

                    if(!instance){
                        return;
                    }

                    view.model = {
                        exercise : exercise.toJSON(),
                        instance: instance.toJSON()
                    };

                    _this.children.push(view);
                    els.push(view.render().el);

                });

                _this.$('.exercise-history-list').append(els);

            },

            events: {
                'click .btn-back': 'go-back',
                'click .btn-delete': 'delete'
            },

            'delete': function(e){
                e.preventDefault();
                var _this = this;

                require(['components/confirm'], function(Confirm){
                    _this.confirmBox = new Confirm({
                        title: App.translate('history.deletetitle'),
                        text: App.translate('history.deletetext'),
                        confirmtext: App.translate('shared.delete'),
                        confirmdanger: true,
                        canceltext: App.translate('shared.cancel'),
                        cancelFn: function(){
                            _this.closeConfirmBox();
                        },
                        confirmFn: function(){
                            _this.deleteItem();
                            _this.closeConfirmBox();
                        }
                    });

                    $(document.body).append(_this.confirmBox.render().el);
                });
            },

            deleteItem: function(){
                var _this = this;
                _this.model.destroy({
                    success: function(){
                        App.toast('success', 'Item removed');
                        window.history.back();
                    },
                    error: function(){
                        App.toast('info', 'Failed to remove item');
                    }
                })
            },

            'go-back': function(e){
                e.preventDefault();

                window.history.back();
            },

            closeConfirmBox: function(){
                var _this = this;
                if(_this.confirmBox){
                    _this.confirmBox.Close();
                    delete _this.confirmBox;
                }           
            },

            Close: function(){
                var _this = this;
                _.each(_this.children, function(child){
                    child.Close();
                });
                _this.children = [];
                _this.closeConfirmBox();

                View.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return View;
    
});