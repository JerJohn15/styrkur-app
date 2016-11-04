define('collections/workouts',
    [
        'backbone',
        'models/workout'
    ], function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database
        
    });
    
});
