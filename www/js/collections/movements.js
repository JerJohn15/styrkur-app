define('collections/movements',
    [
        'backbone',
        'models/movement'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
