define('models/user',
    [
        'backbone'
    ], 
    function(Backbone){
    'use strict';
    
    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            age: '',
            gender: '',
            workout: undefined, //ID of the current workout
            targetWeight: '',
            goal: '',
            goalType: undefined,
            units: 'metric',
            colorpalette: 'blue'
        },

        storeName: 'user',

        database: window.styrkurdb

    });

});
