define('models/set-instance',
    [
        'backbone'
    ], 
    function(Backbone){

    var Model = Backbone.Model.extend({

        defaults: {
            reps: undefined,
            weight: undefined,
            comment: ''
        }
        
    });

    return Model;

});
