define('collections/measurements',
    [
        'backbone',
        'models/measurement'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
