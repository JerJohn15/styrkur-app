define('collections/serveritems',
    [
        'backbone',
        'models/serveritem'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return  Backbone.Collection.extend({
        
        model: Model,

        url: window.apiurl + '/list'

    });
    
});
