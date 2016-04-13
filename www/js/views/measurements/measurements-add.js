define('views/measurements/measurements-add',
    [
        'base/list-view',
        'views/measurements/measurement-add-item',
        'templates/measurements/measurements-add.html',
        'models/measurement'
    ],
    function(BaseView, ItemView, Template, Model){
    'use strict';

    var view = BaseView.extend({

        options: {
            goalTypes: App.enums.goals
        },
    
        Template: Template,

        ItemView: ItemView,

        listSelector: '.measurement-items',

        className: 'measurement-view measurement-add',

        events: {
        	'click .btn-save': 'save'
        },

        'save': function(e){
        	e.preventDefault();
            var _this = this,
                values = [],
                comment = _this.$('textarea[name="comment"]').val(),
                onSuccess = function () {
                    App.toast('success', 'Measurement added');
                    App.navigate('#/measurements/');
                },
                onFail = function () {
                    App.toast('warning', 'Something went wrong, please check your fields');
                },
                model,
                fail = false;

            _.each(_this.children,function(child){
                var item = child.getValue ? child.getValue() : undefined;
                if(item === false){
                    fail = true;
                }
                if(item){
                    values.push(item);
                }
            });
            if(fail){ 
                return;
            }

            if(!values.length){
                onFail();
            }
            else{
                model = new Model({
                    date: (new Date).getTime(),
                    comment: comment,
                    items: values
                });
                model.save(undefined,{
                    success: onSuccess,
                    error: onFail
                });
            }

        }
    
    });
    
    return view;
    
});