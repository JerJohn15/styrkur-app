define('models/appinfo',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            version: '0.0.0'
        },

        initialize: function(attr, options){
            if(!attr.id){
                this.set('id', '0');
            }
        },

        storeName: 'appinfo',

        database: window.styrkurdb
        
    });

});
