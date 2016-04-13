define('models/body-part',
    [
        'backbone'
    ], 
    function(Backbone){

    return Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: undefined,
            unittype: 'weight'
        },

        idAttribute: 'id',

        store: new WebSQLStore(db, 'bodypart')

    });

});
/*
Weight:
Thighs:
Body Fat Forearms
Chest Calves
Arms Shoulders
Hips Neck
Waist Height
*/