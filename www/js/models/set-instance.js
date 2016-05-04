define('models/set-instance',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    var Model = Backbone.Model.extend({

        defaults: {
            reps: undefined,
            weight: undefined,
            comment: ''
        }
        
    });

    return Model;

});
