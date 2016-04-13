define('collections/exercises',
    [
        'backbone',
        'models/exercise'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('order');
        }
        
        
    });
    
});
