define('views/about',
    [
        'base/base-view',
        'templates/about.html'
    ],
    function(BaseView, Template){
    'use strict';

    var view = BaseView.extend({

        options: {
            version: App.version
        },

        render: function(){
            var _this = this;
            view.__super__.render.apply(_this, arguments);

            require(['views/settings/settings'], function(settView){
                var subView = _this.settView = new settView();
                subView.model = App.User;
                _this.$('.settings-wrapper').append( subView.render().el );
            });

            return _this;
        },

        className: 'about-view',
    
        Template: Template,

        Close: function(){
            var _this = this;

            if(_this.settView){
                _this.settView.Close();
            }

            view.__super__.Close.call(_this);
        }
        
    });
    
    return view;
    
});