define(['jquery', 'backbone'], 
    function($, Backbone){
    'use strict';
    
    var BaseView = Backbone.View.extend({
    
        render: function(){
            var _this = this,
                template = _this.Template,
                renderTemplate = function(){
                    var model = (_this.model && _this.model.attributes) ? _this.model.attributes : (_this.model ? _this.model : {}),
                        attr = _.extend({}, model, _this.options);
                    _this.$el.html(template(attr));
                    return _this;
                };
                
            if ( _.isString(template) ) { //its a string
                template = _.template(template);
            }
            
            return renderTemplate();
        },
        
        Close: function() {
            this.remove();
        }
    
    });
    
    return BaseView;
});
