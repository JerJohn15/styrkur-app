define('views/plan/server-item',
    [
        'base/base-view',
        'templates/plan/server-item.html'
    ],
    function(BaseView, Template){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'workout-item card',

        events: {
            'click .get-item': 'getItem'
        },

        'getItem': function(e){
            e.preventDefault();
            var data,
                Modeldef,
                onDone = function(){
                    if(data && Modeldef){
                        var model = new Modeldef(data);
                        model.sync('create', model, {
                            success: function(){
                                App.toast('success', 'Successfully added workout.');
                            },
                            error: function(){
                                App.toast('error', 'Failed loading workout.');
                            }
                        });
                    }
                };

            $.get( window.apiurl + '/get/' + this.model.get('id'),
                function(mdl){
                    data = mdl;
                    onDone();
                });

            require(['models/workout'], function(Model){
                console.log('Model');
                Modeldef = Model;
                onDone();
            });
        }
    
    });
    
    return View;
    
});