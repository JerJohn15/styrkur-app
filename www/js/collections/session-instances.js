define('collections/session-instances',
    [
        'backbone',
        'models/session-instance'
    ], 
    function(Backbone, Model){
        
    return Backbone.Collection.extend({
        
        model: Model,
        
        store: Model.prototype.store,

        comparator: function(ab) {
            return ab.get('date') ? (this.asc ? (new Date(ab.get('date'))).getTime() : -(new Date(ab.get('date'))).getTime()) : undefined;
        }
        
    });
    
});
