define('collections/session-instances',
    [
        'backbone',
        'models/session-instance'
    ], 
    function(Backbone, Model){
    'use strict';
    
    return Backbone.Collection.extend({
        
        model: Model,
        
        storeName: Model.prototype.storeName,

        database: Model.prototype.database,

        comparator: function(ab) {
            return ab.get('date') ? (this.asc ? (new Date(ab.get('date'))).getTime() : -(new Date(ab.get('date'))).getTime()) : undefined;
        }
        
    });
    
});
