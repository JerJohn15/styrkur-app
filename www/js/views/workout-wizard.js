define('views/workout-wizard',
    [
        'base/parent-view',
        'templates/workout-wizard.html',
        'views/workout',
        'views/exercises'
    ],
    function(BaseView, Template, SessionView, ExercisesView){

    var View = BaseView.extend({
    
        Template: Template,

        render: function(){
            var _this = this;
            
            View.__super__.render.apply(_this, arguments);

            _this.switchView('sessions', {});

            App.Events.on('workout-wizard:view', function(view, options){
                _this.switchView(view, options);
            });
            
            return _this;
        },

        switchView: function(req, options){
            var view;
            switch(req){
                case 'exercises':
                    view = new ExercisesView();
                    view.model = options.model;
                    view.parentModel = this.model;
                    break;
                default:
                    view = new SessionView();
                    view.model = this.model;
                    break;
            }

            this.ShowChild(view, '.wizard-container');
        },
    
    });
    
    return View;
    
});