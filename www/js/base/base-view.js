define('base/base-view',
    [
        'backbone',
        'backbone-template'
    ], 
    function(Backbone, Templater){
    'use strict';

    var htmlToEl = function(str){
        var el = document.createElement('div');
        el.innerHTML = str;
        return el.parentElement;
    };
    
    var BaseView = Backbone.View.extend({
    
        render: function(){
            var _this = this,
                template = _this.Template,
                renderTemplate = function(){
                    var model = (_this.model && _this.model.attributes) ? _this.model.attributes : (_this.model ? _this.model : {}),
                        attr = _.extend({ t: App.translate }, model, _this.options);

                    _this.el.appendChild(htmlToEl(template(attr)));
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
