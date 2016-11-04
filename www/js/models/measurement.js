define('models/measurement',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            date: undefined,
            comment: undefined,
            items: undefined
        },

        storeName: 'measurement',

        database: window.styrkurdb

    });

});
