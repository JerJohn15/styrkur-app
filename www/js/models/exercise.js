define('models/exercise',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            order: 0,
            name: undefined,
            muscle: undefined,
            description: undefined,
            type: 'weightrep',
            sets: 1,
            pause: 0,
            record: undefined,
            enabled: true
        },

        initialize: function(attr, options){
            if(!attr.id){
                this.set('id', App.uuid());
            }
        }
        
    });

});
