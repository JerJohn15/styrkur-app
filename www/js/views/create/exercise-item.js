define('views/create/exercise-item',
    [
        'base/base-view',
        'models/exercise',
        'templates/create/exercise-item.html',
        'views/create/movement'
        ,'backbone.stickit'
    ],
    function(BaseView, Model, Template, MovementsView){

    var view = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'card',

        render: function() {
            var _this = this;

            if(_this.options && _this.options.parent && _this.options.parent.showDisabled == false){
                if(_this.model.get('enabled') === false){
                    _this.el.className = '';
                    return _this;
                }
            }

            view.__super__.render.apply(_this, arguments);
            _this.stickit();



            if(_this.model.get('muscle') && !_this.model.get('muscleid')){
                _this.$('.muscle-select').addClass('toggle-edit');
            }
            _this.renderMovements(_this.model.get('muscleid'));

            return _this;
        },

        renderMovements: function (muscleid){
            var _this = this,
                movements = _this.options.parent.movements.filter(function(mov){ return mov.get('muscle') === muscleid }),
                movementview = new MovementsView({ muscleid: muscleid, movements: movements });

            if(_this.movementview){
                _this.movementview.Close();
            }

            _this.movementview = movementview;
            _this.movementview.model = _this.model;
            _this.$('.movement-select').html(movementview.render().el);
        },

        bindings: {
            'select[name="muscleid"]': {
                    observe: 'muscleid',
                    onSet: function (value) {
                        var selectedValue = this.options.parent.muscles.findWhere({id: value});
                        this.renderMovements(value);
                        this.model.set('muscle', selectedValue.get('name'));
                        return value;
                    }
                },
            'input[name="muscle"]': {
                    observe: 'muscle',
                    onSet: function (value) {
                        if(value){
                            this.model.set('muscleid', '');
                            this.renderMovements();
                        }
                        return value;
                    }
                },
            'input[name="sets"]': 'sets',
            'input[name="pause"]': 'pause',
            'input[name="enabled"]': 'enabled',
            'select[name="type"]': 'type'
        },

        events: {
            'click .muscle-select-toggle': 'muscle-select-toggle'
        },

        'muscle-select-toggle': function (e) {
            e.preventDefault();

            this.$('.muscle-select').toggleClass('toggle-edit');
        },

        getIdeas: function(){
            var muscles = _.keys(Workouts);
        }
    
    });
    
    return view;
    
});