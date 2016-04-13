define('views/history/graph-sessions',
    [
        'backbone',
        'base/list-view',
        'templates/history/graph-sessions.html',
        'views/history/graph-sessions-item',
        'collections/session-instances'
    ],
    function(Backbone, BaseView, Template, ItemView){

    var _createNewCollection = function(coll){
            var _this = this,
                coll = _this.collection,
                newObj = {},
                newList = [];

            coll.each(function(instance){
                var date = instance.get('date');
                instance.get('exercises').each(function(exercise){
                    var exid = exercise.get('exercise'),
                        exInfo
                    if(!newObj['_' + exid]){
                        exInfo = _this.model.get('exercises').findWhere({ id: exid });
                        newObj['_' + exid] = {
                                exercise: exInfo.get('name'),
                                muscle: exInfo.get('muscle'),
                                type: exInfo.get('type'),
                                items: []
                            };
                    }

                    newObj['_' + exid].items.push({ 
                            date: date, 
                            sets: exercise.get('sets').toJSON() 
                        });
                });
            });

            _.each(newObj, function(value, key){
                newList.push(value);
            });

            return new Backbone.Collection(newList, {parse: true});
        },

        view = BaseView.extend({

            render: function(){
                var _this = this;

                _this.collection = _createNewCollection.call(_this);

                return view.__super__.render.apply(_this, arguments);
            },
        
            Template: Template,

            ItemView: ItemView,

            listSelector: '.graphs',

            events: {
                'click .btn-back': 'go-back'
            },

            'go-back': function(e){
                e.preventDefault();

                App.navigate('#/workout/');
            }
        
        });
    
    return view;
    
});