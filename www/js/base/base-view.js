define('base/base-view',
    [
        'backbone',
        'exoskeleton.template'
    ], 
    function(Backbone, Templater){
    'use strict';

    var htmlToEl = function(str, tagName){
        var el = document.createElement(tagName);
        el.innerHTML = str;
        return el;
    };

    var _ = Backbone.utils;
    
    var BaseView = Backbone.View.extend({
    
        render: function(){
            var _this = this,
                template = _this.Template,
                renderTemplate = function(){
                    var model = (_this.model && _this.model.attributes) ? _this.model.attributes : (_this.model ? _this.model : {}),
                        attr = _.extend({ t: App.translate }, model, _this.options);

                    _this.el.appendChild(htmlToEl(template(attr), _this.tagName));
                    return _this;
                };
                
            if ( typeof template === 'string' ) { //its a string
                template = Templater(template);
            }
            
            return renderTemplate();
        },
        
        Close: function() {
            this.remove();
        }
    
    });
    
    return BaseView;
});
