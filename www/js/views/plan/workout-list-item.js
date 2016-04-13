define('views/plan/workout-list-item',
    [
        'base/base-view',
        'templates/plan/workout-list-item.html'
    ],
    function(BaseView, Template){

    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'workout-item card',

        options: {
            currentWorkout: App.User.get('workout')
        },

        render: function(){
            this.options = {
                currentWorkout: App.User.get('workout') || '-1'
            }

            return View.__super__.render.apply(this, arguments)
        },

        events: {
            'click .btn-use-item': 'useWorkout'
        },

        'useWorkout': function(e){
            e.preventDefault();
            var target = $(e.target);

            App.toast('info', this.model.get('name') + ' set as current workout plan.')

            App.User.set('workout', this.model.get('id'));
            App.Events.trigger('workout:changed');
        }
    
    });
    
    return View;
    
});