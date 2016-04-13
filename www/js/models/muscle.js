define('models/muscle',
    [
        'backbone'
    ], 
    function(Backbone){

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined
        },

        idAttribute: 'id',

        store: new WebSQLStore(db, 'muscle')

    });

});