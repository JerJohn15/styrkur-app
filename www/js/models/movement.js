define('models/movement',
    [
        'backbone'
    ], 
    function(Backbone){

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