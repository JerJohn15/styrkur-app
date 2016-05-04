define('collections/sessions',
    [
        'backbone',
        'models/session'
    ], 
    function(Backbone, Model){
    'use strict';
     
    return Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('order');
        }
        
    });
    
});
