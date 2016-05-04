define('site-nav',
    [
        'base/base-view',
        'templates/site-nav.html'
    ], function (BaseView, Template) {
    'use strict';
    
    var view = BaseView.extend({

        Template: template,

        render: function() {
            var _this = this;

            view.__super__.render.call(_this);

            App.Events.on('navigate:done', function(place){
                _this.$('li').removeClass('active');
                _this.$('li.nav-' + place).addClass('active');
            });

            return _this;
        },

        events: {
            'click li': 'navigate'
        },

        'navigate': function(e){
            e.preventDefault();
        }
        
    });

    return view;

});
