define('models/serveritem',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined
        }

    });

});
