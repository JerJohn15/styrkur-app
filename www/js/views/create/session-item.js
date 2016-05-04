define('views/create/session-item',
    [
        'base/base-view',
        'models/session',
        'collections/exercises',
        'views/create/exercises',
        'templates/create/session-item.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Model, ExercisesColl, ExercisesView, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        className: 'session-item card',

        render: function() {
            var _this = this;

            if(_this.options && _this.options.parent && _this.options.parent.showDisabled === false){
                if(_this.model.get('enabled') === false){
                    _this.el.className = '';
                    return _this;
                }
            }

            View.__super__.render.apply(_this, arguments);

            _this.stickit();
            return _this;
        },

        bindings: {
            'input[name="sessionName"]': 'name',
            'textarea[name="description"]': 'description',
            'input[name="estTime"]': 'estTime',
            'input[name="enabled"]': 'enabled'
        },

        events: {
            'click .btn-exercises': 'goExercises'
        },

        'goExercises': function(e){
            var _this = this,
                wid = _this.options.parent.workoutid,
                sessionid = _this.model.get('id');
                
            e.preventDefault();
            //App.Events.trigger('create-wizard:view', 'exercises', { model: this.model });
            App.navigate('#/create/wizard/' + wid + '/exercises/' + sessionid);
        }
    
    });
    
    return View;
    
});