define('collections/body-parts',
    [
        'backbone',
        'models/body-part'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
