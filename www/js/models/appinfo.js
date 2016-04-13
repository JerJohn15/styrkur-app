define('models/appinfo',
    [
        'backbone'
    ], 
    function(Backbone){

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            version: '0.0.0'
        },

        initialize: function(attr, options){
            attr.id || this.set('id', '0');
        },

        store: new WebSQLStore(db, 'appinfo')
        
    });

});
