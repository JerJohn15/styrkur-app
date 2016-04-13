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
        },

        colorpalette: ['blue', 'blue', 'orange', 'red', 'pantone'],

        Template: Template, //'<ul><li class="nav-home active"><i class="icon icon-home"></i></li><li class="nav-workout"><i class="icon icon-check"></i></li><li class="nav-plan"><i class="icon icon-calendar"></i></li><li class="nav-measurements"><i class="icon icon-measure"></i></li><li class="nav-settings"><i class="icon icon-settings"></i></li></ul>', 

        render: function() {
            var _this = this;

            view.__super__.render.call(_this);

            App.Events.on('navigate:done', function(place){
                _this.$('li').removeClass('active');
                _this.$('li.nav-' + place).addClass('active');
            });

            //$(document.body).addClass('section-' + _this.currentItem);
            //App.setColorPalette( _this.colorpalette[_this.currentItem] );

            return _this;
        },
/*
        events: {
            'click a': 'goToItem'
        },

        'goToItem': function(e){
            var _this = this,
                target = $(e.currentTarget),
                index = target.index();

            $(document.body).removeClass('section-' + _this.currentItem).addClass('section-' + index);

            _this.$('li').removeClass('active')
                .eq(index).addClass('active');

            _this.currentItem = index;
        },
*/
        className: 'top-menu'
        
    });

    return view;

});
