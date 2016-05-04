define('collections/muscles',
    [
        'backbone',
        'models/muscle'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
