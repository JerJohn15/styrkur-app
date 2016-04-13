define('collections/muscles',
    [
        'backbone',
        'models/muscle'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

    });
    
});
