define('views/settings/settings',
    [
        'base/base-view',
        'templates/settings/settings.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Template){
    'use strict';

    var view = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options.languages = App.languages;

            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

        options: {
            goalTypes: App.enums.goals
        },
    
        Template: Template,

        className: 'settings-view',

        events: {
            'click .btn-save': 'save'
        },

        bindings: {
            '[name="age"]': 'age',
            '[name="gender"]': 'gender',
            '[name="goaltype"]': 'goalType',
            '[name="goal"]': 'targetWeight',
            '[name="units"]': 'units',
            '[name="language"]': {
                observe: 'language',
                onSet: function(val){
                    App.setLanguage(val);
                    return val;
                }
            },
            '[name="colorpalette"]': 'colorpalette',

            '.tut-weight-goal .input-group-addon': {
                observe: 'units',
                onGet: function(value){
                    return value === 'metric' ? 'kg': 'lbs';
                }
            }
        },

        //User is saved automaticly..
        'save': function(e){
            e.preventDefault();
            var _this = this,
                onSuccess = function () {
                    App.setLanguage(App.User.get('language'));
                    App.toast('success', 'User updated');
                },
                onFail = function () {
                    App.toast('warning', 'Could not update user');
                };

            if(_this.model.get('gender') === '' || _this.model.get('age') === '' || _this.model.get('units') === '' || _this.model.get('goalType') === ''){
                App.toast('info', 'Please fill in all required fields');
                return false;
            }

            App.User.sync('update', App.User,{
                    success: onSuccess,
                    fail: onFail
                });
        }
    
    });
    
    return view;
    
});