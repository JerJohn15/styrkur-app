define('collections/measurements',
    [
        'backbone',
        'models/measurement'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
