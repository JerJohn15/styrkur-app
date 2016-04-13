define('models/workout',
    [
        'backbone',
        'collections/sessions'
    ], 
    function(Backbone, SesCollection){

    var model = Backbone.Model.extend({

        defaults: {
            id: undefined,
            name: undefined,
            description: null,
            sessions: undefined
        },

        initialize: function(attr, options){
            (attr && attr.session) ? this.set('sessions', new SesCollection(attr.sessions)) : false;
            return model.__super__.initialize.apply(this, arguments);
        },

        parse: function(attr, options){
            if(attr.sessions){
                attr.sessions = new SesCollection(attr.sessions);
            }
            else {
                attr.sessions = new SesCollection();
            }
            
            return model.__super__.parse.call(this, attr, options);
        },

        toJSON: function(){
            var clone = _.clone(this.attributes);
            clone.sessions = (clone.sessions && clone.sessions.toJSON) ? clone.sessions.toJSON() : (clone.sessions ? clone.sessions : undefined);

            return clone;
        },

        store: new WebSQLStore(db, 'workout')
        
    });

    return model;

});
