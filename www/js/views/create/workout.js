define('views/create/workout',
    [
        'base/base-view',
        'models/workout',
        'templates/create/workout.html'
    ],
    function(BaseView, Model, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,
        
        render: function(){
            return View.__super__.render.apply(this, arguments);
        },

        className: 'create-wizard create-workout-view card',
        
        events: {
            'click .btn-create': 'create'
        },
        
        'create': function(e){
            e.preventDefault();
            
            var model = new Model();

            model.set('name', this.$('input[name="name"]').val() );
            
            model.sync('create', model, {
                success: function(modelAttr){
                    App.navigate('#/create/wizard/' + model.get('id'));
                },
                error: function(){
                    console.log('failed creating');
                    App.toast('info', 'Whoops something went wrong');
                }
            });
        },
        
        Close: function(){
            View.__super__.Close.apply(this, arguments);
        }
    
    });
    
    return View;
    
});
