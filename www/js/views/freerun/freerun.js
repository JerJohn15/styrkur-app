define('views/freerun/freerun',
    [
        'base/list-view',
        'templates/freerun/freerun.html',
        'views/freerun/freerun-item',
        'backbone'
        ,'backbone.stickit'
    ],
    function(BaseView, Template, ItemView, InstanceModel, Backbone){

    var view = BaseView.extend({

        initialize: function(opt){
            var _this = this;
            _this.options = _.extend({}, opt || {});;
            view.__super__.initialize.apply(_this, arguments);
        },

        render: function(){
            var _this = this;

            _this.collection = _this.model.get('exercises');

            _this.collection.on('add', function(model, collection, options){
                _this.addChild(model);
            });

            return view.__super__.render.apply(_this, arguments);
        },

    	className: 'free-run',
    
        Template: Template,

        ItemView: ItemView,

        listSelector: '.exercise-list',

        events: {
            'click .btn-add-exercise': 'add-exercise',
            'click .btn-save': 'save',
            'click .btn-back': 'go-back'
        },

        'add-exercise': function(e){
            e.preventDefault();
            this.collection.add({});
        },

        'save': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.set('comment', _this.$('textarea[name="comment"]').val());

            _.each(_this.children, function(view){
                view.getData();
            });

            var totalLifted = this.calcWeightLifted(_this.model.get('exercises'));


            if(totalLifted > 0){
                _this.$('.weight-lifted').text(totalLifted + App.enums.units.weight());
            }
            else {
                _this.$('.welldone-box h2').text('Another workout well done!')
            }

            _this.model.save(null, {
                success: function(attr){
                    _this.$('.welldone-box').addClass('in');

                    setTimeout(function() {
                        App.navigate('#/workout');
                    }, 2500);
                }
            });

        },

        calcWeightLifted: function (list) {
            var totalWeight = 0;
            list.each(function(item){
                item.get('sets').each(function(set){
                    var reps = set.get('reps');
                    var weight = set.get('weight');
                    var ireps = parseInt(reps);
                    var iweight = parseInt(weight);
                    if(reps && weight && ireps > 0 && iweight > 0){
                        totalWeight += ireps * iweight;
                    }
                    
                });
            });
            return totalWeight;
        },

        'go-back': function(e){
            e.preventDefault();

            App.Events.trigger('workout-wizard:view', 'sessions');
        }

        
    });
    
    return view;
    
});