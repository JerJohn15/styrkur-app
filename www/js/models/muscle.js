define('models/muscle',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined
        },

        idAttribute: 'id',

        storeName: 'muscle',

        database: window.styrkurdb

    });

});