define('collections/exercise-instances',
    [
        'backbone',
        'models/exercise-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('date');
        }
        
        
    });
    
});
