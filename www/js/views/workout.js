define('views/workout',
    [
        'backbone',
        'base/parent-view',
        'templates/workout.html',
        'views/session-list'
    ],
    function (Backbone, BaseView, Template, SessionsView){

    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this,
                workoutId = _this.model.get('id'),
                sessionView = new SessionsView;

            sessionView.workoutId = workoutId;
            //Filter out to enabled sessions
            sessionView.collection = new Backbone.Collection(_this.model.get('sessions').filter(function(item){
                    return item.get('enabled') == undefined || item.get('enabled');
                }));

            View.__super__.render.apply(_this, arguments);
            _this.ShowChild(sessionView, '.sessions-list-content');
            
            return _this;
        },

        events: {
            'click .toggle-description': 'toggle-description',
            'click .btn-freerun': 'goToFreeRun',
            'click .btn-freelog': 'logFreeRun',
        },

        'goToFreeRun': function(e){
            e.preventDefault();
            App.navigate('#/freerun');
        },
        'logFreeRun': function(e){
            e.preventDefault();
            App.navigate('#/freerun/history');
        },

        'toggle-description': function(e){
            var _this = this,
                target = e.currentTarget,
                desc = _this.$('.session-description');

            desc.toggle();
        }
    
    });
    
    return View;
    
});