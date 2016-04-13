define('models/exercise-instance',
    [
        'backbone',
        'collections/set-instances'
    ], 
    function(Backbone, Sets){

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            exercise: undefined,
            date: undefined,
            sets: undefined
        },

        initialize: function(attr, options){
            this.set('date', new Date);
            this.set('sets', new Sets((attr && attr.sets) ? attr.sets: undefined));

            return Model.__super__.initialize.apply(this, arguments);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.sets = (clone.sets && clone.sets.toJSON) ? clone.sets.toJSON() : (clone.sets ? clone.sets : undefined);

            clone.date = clone.date ? clone.date.getTime() : undefined;

            return clone;
        }
        
    });

    return Model;

});
