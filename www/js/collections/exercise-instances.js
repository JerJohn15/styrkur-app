define('collections/exercise-instances',
    [
        'backbone',
        'models/exercise-instance'
    ], 
    function(Backbone, Model){
        
    return  Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('date');
        }
        
        
    });
    
});
