define('views/freerun/freerun-item',
    [
        'base/base-view',
        'collections/set-instances',
        'templates/freerun/freerun-item.html'
    ],
    function(BaseView, SetCollection, Template){

    var view = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options.units = App.enums.units.getAll();
            
            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

        renderMovements: function (muscleid){
            var _this = this,
                movements = _this.options.parent.movements.filter(function(mov){ return mov.get('muscle') === muscleid }),
                html = [];

            _.each(movements, function(movement){
                html.push('<option value="' + movement.get('id') + '">' + movement.get('name') + '</option>');
            });

            _this.$('[name="movement"]').html(html.join(''));

            _this.model.set('exercise', movements.length ? movements[0].get('id') : '');

            setTimeout(function(){
                //Need to trigger this so that the newly created html will be catched..
                _this.stickit();
            }, 0);
        },

    	className: 'free-run-item card',
    
        Template: Template,

        bindings: {
            'select[name="muscle"]': {
                    observe: 'muscle',
                    onSet: function (value) {
                        var selectedValue = this.options.parent.muscles.findWhere({id: value});
                        this.renderMovements(value);
                        return value;
                    }
                },
            'select[name="movement"]': 'exercise'
        },

        getData: function(){
            var _this = this,
                list = [];
            _this.$('.sets-item').each(function(i, item){
                list.push({
                    "reps": $(item).find('[name="reps"]').val(),
                    "weight": $(item).find('[name="weight"]').val(),
                    "comment": ""
                });
            });
            _this.model.set('sets', new SetCollection(list));
        },

        events: {
            'click .btn-add-set': 'add-set'
        },

        'add-set': function(e){
            e.preventDefault(); 
            //This should have its own template file
            var html = '<div class="sets-item form-group">' +
                '<input name="reps" placeholder="Reps" min="0" type="number" class="form-control"> ' +
                '<input name="weight" placeholder="Weight ('+
                 this.options.units.weight +
                 ')" min="0" type="number" class="form-control">' +
            '</div>';

            this.$('.sets-list').append(html);
        }
        
    });
    
    return view;
    
});