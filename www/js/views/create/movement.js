define('views/create/movement',
    [
        'base/base-view',
        'templates/create/movement.html'
    ],
    function(BaseView, Template){
    'use strict';
    
    var view = BaseView.extend({

        initialize: function (cfg) {
            this.options = cfg || {};
        },
    
        Template: Template,

        tagName: 'div',

        render: function() {
            var _this = this;

            _this.model = _this.model || {};
            
            view.__super__.render.apply(_this, arguments);

            if(!_this.options.movements || _this.options.movements.length === 0){
                _this.$('.select-edit-toggle').addClass('toggle-edit');
            }

            _this.stickit();

            return _this;
        },

        bindings: {
            'select[name="movementid"]': {
                    observe: 'movementid',
                    onSet: function (value) {
                        var selectedValue = _.findWhere(this.options.movements,{id: value});
                        this.model.set('name', selectedValue.get('name'));
                        return value;
                    }
                },
            'input[name="exercise"]': {
                    observe: 'name',
                    onSet: function (value) {
                        if(value){
                            this.model.set('movementid', '');
                        }
                        return value;
                    }
                },
        },

        events: {
            'click .movement-select-toggle': 'movement-select-toggle'
        },

        'movement-select-toggle': function (e) {
            e.preventDefault();

            this.$('.select-edit-toggle').toggleClass('toggle-edit');
        },
    
    });
    
    return view;
    
});