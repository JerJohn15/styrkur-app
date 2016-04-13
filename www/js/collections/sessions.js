define('collections/sessions',
    [
        'backbone',
        'models/session'
    ], 
    function(Backbone, Model){
        
    return Backbone.Collection.extend({
        
        model: Model,

        comparator: function(ab) {
            return ab.get('order');
        }
        
    });
    
});
