define('models/session',
    [
        'backbone',
        'collections/exercises'
    ], 
    function(Backbone, ExCollection){
    'use strict';

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            order: 0,
            name: undefined,
            estTime: undefined,
            description: undefined,
            exercises: undefined,
            enabled: true
        },

        initialize: function(attr, options){
            this.set('exercises', new ExCollection(attr.exercises));
            if(!attr.id){
                this.set('id', App.uuid());
            }
        },

        parse: function(attr, options){
            if(attr.exercises){
                attr.exercises = new ExCollection(attr.exercises);
            }
            else {
                attr.exercises = new ExCollection();
            }
            
            return Model.__super__.parse.call(this, attr, options);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.exercises = (clone.exercises && clone.exercises.toJSON) ? clone.exercises.toJSON() : (clone.exercises ? clone.exercises : undefined);

            return clone;
        }

    });

    return Model;

});
