define('models/serveritem',
    [
        'backbone'
    ], 
    function(Backbone){

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined
        }

    });

});
