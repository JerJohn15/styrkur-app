define('collections/users',
    [
        'backbone',
        'models/user'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});
