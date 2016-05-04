define('views/measurements/bodypart-add',
    [
        'base/base-view',
        'templates/measurements/bodypart-add.html',
        'models/body-part'
    ],
    function(BaseView, Template, Model){
    'use strict';

        var view = BaseView.extend({

                options: {
                    noData: false
                },
                
                Template: Template,

                events: {
                    'click .btn-save': 'save-part'
                },

                'save-part': function(e){
                    e.preventDefault();
                    var _this = this,
                        name = _this.$('[name="name"]').val(),
                        description = _this.$('[name="description"]').val(),
                        unittype = _this.$('[name="unittype"]').val(),
                        model;

                    if(!name){
                        App.toast('warning', 'No name set');
                        return;
                    }

                    model = new Model({
                        name: name,
                        description: description,
                        unittype: unittype
                    });
                    model.save(undefined,{
                        success: function(){
                            App.toast('info', 'Part added');
                            App.navigate('#/measurements/');
                        },
                        error: function(){
                            App.toast('warning', 'Whoops.. Something went wrong');
                        }
                    });
                }

            });

        return view;

});