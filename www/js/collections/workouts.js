define('collections/workouts',
    [
        'backbone',
        'models/workout'
    ], function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        store: Model.prototype.store
        
    });
    
});
