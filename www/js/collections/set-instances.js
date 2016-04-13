define('collections/set-instances',
    [
        'backbone',
        'models/set-instance'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({

        model: Model
        
    });
    
});
