define('collections/workouts',
    [
        'backbone',
        'models/workout'
    ], function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,

        store: Model.prototype.store
        
    });
    
});
