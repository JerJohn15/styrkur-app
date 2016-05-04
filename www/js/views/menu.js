define([
        'jquery',
        'underscore',
        'backbone',
        'base/base-view',
        'templates/menu.html'
    ], function ($, _, Backbone, BaseView, template) {
    'use strict';
    
    var view = BaseView.extend({

        Template: template,

        render: function() {
            var _this = this,
                _super = view.__super__,
                render = function() {
                    _super.render.call(_this);
                };

            render();

            App.Events.on('navigate:done', function(place){
                _this.$('a').removeClass('active');
                _this.$('a.nav-' + place).addClass('active');
            });

            return _this;
        },
        
    });

    return view;

});
