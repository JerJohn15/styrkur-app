define('components/confirm',[
        'backbone',
        'base/base-view',
        'templates/confirm.html'
    ], function (Backbone, BaseView, Template) {
    'use strict';
    
    var view = BaseView.extend({

        initialize: function(options){
            this.options = options;
        },

        Template: Template,

        render: function(){
            var _this = this;

            view.__super__.render.apply(_this, arguments);

            _this.$el.show();

            setTimeout(function(){
                _this.$el.show().addClass('in');
            }, 300);

            return _this;
        },

        events: {
            'click .btn-cancel': 'cancel-click',
            'click .btn-confirm': 'confirm-click'
        },

        'cancel-click': function(e){
            if(this.options.cancelFn){
                this.options.cancelFn(e);
            }
        },

        'confirm-click': function(e){
            if(this.options.confirmFn){
                this.options.confirmFn(e);
            }
        },

        className: 'confirm-modal modal fade'
        
    });

    return view;

});
