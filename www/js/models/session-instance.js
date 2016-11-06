define('models/session-instance',
    [
        'backbone',
        'collections/exercise-instances'
    ], 
    function(Backbone, Exercises){
    'use strict';

    var Model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            date: 0,
            parent: undefined,
            comment: undefined,
            exercises: undefined
        },

        parse: function(attr, options){
            if(attr.exercises && !(attr.exercises instanceof Backbone.Collection)){
                attr.exercises = new Exercises(attr.exercises || []);
            }
            
            return Model.__super__.parse.call(this, attr, options);
        },

        initialize: function(attr, options){
            //Only set date if it does not exist..
            if(!attr.date){
                this.set('date', (new Date()).getTime());
            }

            if(!(attr.exercises instanceof Backbone.Collection)){
                attr.exercises = new Exercises(attr.exercises || []);
            }
            return Model.__super__.initialize.apply(this, arguments);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.exercises = (clone.exercises && clone.exercises.toJSON) ? clone.exercises.toJSON() : (clone.exercises ? clone.exercises : undefined);

            return clone;
        },

        storeName: 'session-instance',

        database: window.styrkurdb

    });

    return Model;

});
