define('plugins/side-menu', 
    [
        'jquery'
    ], 
    function($){
    'use strict';
    
    var basecfg = {
            menu: '.side-menu',
            button: '.navbar-toggle'
        },
        __OpenClass = 'sidemenu-open',
        _openMenu = function(){
            $(document.body).addClass(__OpenClass);

            this.isOpen = true;
        },
        _closeMenu = function(){
            this.isOpen = false;
            $(document.body).removeClass(__OpenClass);
        },
        _coverClick = function(e){
            e.preventDefault();
            _closeMenu.call(this);
        },
        _toggleMenuWPrevent = function(){
            _toggleMenu.call(this);
        },
        _toggleMenu = function(){
            var _this = this;
            if(_this.isOpen){
                _closeMenu.call(_this);
            }else{
                _openMenu.call(_this);
            }
        },
        SideMenu = function(cfg){
            var _this = this;

            _this.config = $.extend({}, basecfg, cfg);

            _this.$menu = $(_this.config.menu);
            _this.$btn = $(_this.config.button);
            _this.$cover = $('<div class="side-menu-cover"></div>').appendTo('body');
            _this.isOpen = false;

            //Listen for clicks
            _this.$btn.on('click.open-side-menu', $.proxy(_toggleMenuWPrevent, _this) );
            _this.$cover.on('click.side-menu-cover touchstart.side-menu-cover', $.proxy(_coverClick, _this) );
            _this.$menu.on('click.close-side-menu', 'a',  $.proxy(_closeMenu, _this) );
        },
        _close = function(){
            var _this = this;
            _this.$btn.off('click.open-side-menu');
            _this.$menu.off('click.close-side-menu');
            _this.$cover.off('click.side-menu-cover touchstart.side-menu-cover');
        };


    return {
            init: SideMenu,
            close: $.proxy(_close, SideMenu),
            open: $.proxy(_openMenu, SideMenu)
        };

});