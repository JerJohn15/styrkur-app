define('components/menu',[
        'jquery',
        'backbone',
        'base/base-view',
        'templates/menu/menu.html'
    ], function ($, Backbone, BaseView, Template) {
    'use strict';
    
    var view = BaseView.extend({

        initialize: function(){
            this.currentItem = 0;
            view.__super__.initialize.apply(this, arguments);
        },

        colorpalette: ['blue', 'blue', 'orange', 'red', 'pantone'],

        Template: Template,

        render: function() {
            var _this = this;

            view.__super__.render.call(_this);

            App.Events.on('navigate:done', function(place){
                _this.$('a.active', true).classList.remove('active');
                _this.$('a.nav-' + place, true).classList.add('active');
            });

            return _this;
        },

        className: 'top-menu'
        
    });

    return view;

});
