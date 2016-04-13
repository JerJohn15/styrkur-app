define('views/plan/server-item',
    [
        'base/base-view',
        'templates/plan/server-item.html'
    ],
    function(BaseView, Template){

    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'workout-item card',

        render: function(){

            return View.__super__.render.apply(this, arguments)
        },

        events: {
            'click .get-item': 'getItem'
        },

        'getItem': function(e){
            e.preventDefault();
            var data,
                modeldef,
                onDone = function(){
                    if(data && modeldef){
                        var model = new modeldef(data);
                        model.sync('create', model, {
                            success: function(){
                                App.toast('success', 'Successfully added workout.');
                            },
                            error: function(){
                                App.toast('error', 'Failed loading workout.');
                            }
                        });
                    }
                }

            $.get( window.apiurl + '/get/' + this.model.get('id'),
                function(mdl){
                    console.log('jqGet');
                    data = mdl;
                    onDone();
                });

            require(['models/workout'], function(Model){
                console.log('Model');
                modeldef = Model;
                onDone();
            });
        }
    
    });
    
    return View;
    
});