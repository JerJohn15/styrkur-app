define('models/movement',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            muscle: undefined
        },

        idAttribute: 'id',

        store: new WebSQLStore(db, 'movement', [
                {name: 'muscle', selector: 'muscle', type: 'string'}
            ])

    });

});