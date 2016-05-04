define('collections/set-instances',
    [
        'backbone',
        'models/set-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({

        model: Model
        
    });
    
});
