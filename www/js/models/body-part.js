define('models/body-part',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined,
            unittype: 'weight'
        },

        idAttribute: 'id',

        store: new WebSQLStore(db, 'bodypart')

    });

});