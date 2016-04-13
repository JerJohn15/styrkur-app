define('collections/serveritems',
    [
        'backbone',
        'models/serveritem'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,

        url: window.apiurl + '/list'

    });
    
});
