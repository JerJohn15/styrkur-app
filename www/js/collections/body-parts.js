define('collections/body-parts',
    [
        'backbone',
        'models/body-part'
    ], 
    function(Backbone, Model){
    'use strict';

    return  Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database

    });
    
});
