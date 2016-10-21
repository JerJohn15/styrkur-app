define('views/exercise-item',
    [
        'backbone',
        'base/base-view',
        'templates/exercise-item.html',
        'models/exercise-instance',
        'collections/set-instances',
        'models/set-instance',
        'views/set-item'
    ],
    function(Backbone, BaseView, Template, InstanceModel, SetCollection, SetModel, SetView){
    'use strict';

    var _ = Backbone.utils;

    var view = BaseView.extend({

        initialize: function(){
            this.children = [];
            this.options = this.options || {};
        },
    
        Template: Template,

        tagName: 'div',

        className: 'exercise-container card',

        render: function(){
            var _this = this,
                exerciseId = _this.model.get('id'),
                instance = new InstanceModel({ exercise: exerciseId }),
                setColl = instance.get('sets'),
                numbSets = parseInt(_this.model.get('sets'));

            view.__super__.render.apply(_this, arguments);

            for(var i = 0; i < numbSets; i++){
                var model = new SetModel();

                setColl.add(model);

                this.renderSet(model, i);
            }

            _this.listenTo(setColl, 'add', function(model, collection){
                    _this.renderSet(model, collection.length - 1);
                });
                
            _this.instance = instance;

            return _this;
        },

        findSetFromLastWorkout: function(index){
                var _this = this,
                    prevExercise,
                    prevSet;
            if(_this.options.lastWorkout && _this.options.lastWorkout.get('exercises')){
                prevExercise = _this.options.lastWorkout.get('exercises').findWhere({ exercise: _this.model.get('id') });
                prevSet = prevExercise ? prevExercise.get('sets').at(index) : undefined;
            }

            return prevSet;
        },

        renderSet: function(model, index){
            var _this = this,
                view = new SetView(),
                lastWorkout = _this.findSetFromLastWorkout(index);

            view.model = model;
            _.extend(view.options, { 
                    index: index + 1, 
                    exercise: _this.model,
                    lastReps: lastWorkout ? lastWorkout.get('reps') || 0 : 0,
                    lastWeight : lastWorkout ? lastWorkout.get('weight') || 0 : 0,
                    lastBeat: lastWorkout ? lastWorkout.get('beats') || 0 : 0,
                    lastDistance : lastWorkout ? lastWorkout.get('distance') || 0 : 0,
                    lastTime : lastWorkout ? lastWorkout.get('time') || 0 : 0,
                    pause: _this.model.get('pause'),
                    exType: _this.model.get('type')
                });

            _this.children.push(view);

            _this.$('.sets-list', true).appendChild( view.render().el );
        },

        events: {
            'click .btn-add-set': 'addSet'
        },

        'addSet': function(e){
            e.preventDefault();

            this.instance.get('sets').add(new SetModel({ exercise: this.model.get('id') }));
        },

        Close: function(){
            this.CloseChildren();
            view.__super__.Close.apply(this, arguments);
        },

        CloseChildren: function(){
            _.each(this.children, function(child){
                child.Close();
            });
            this.children = [];
        }
    
    });
    
    return view;
    
});