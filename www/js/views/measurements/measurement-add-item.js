define('views/measurements/measurement-add-item',
    [
        'base/base-view'
    ],
    function(BaseView){
    'use strict';

        var view = BaseView.extend({

            render: function(){
                var _this = this,
                    unittype = _this.model.get('unittype');

                _this.options = {
                        unit: App.enums.units[unittype]()
                    };

                return view.__super__.render.apply(_this, arguments);
            },
            
            Template: [
                    '<h4><%= name %></h4>',
                    '<p><%= description %></p>',
                    '<div class="form-control"><input type="number" min="0" step="any" <%if(unittype == "percent"){%> max="100" <%}%> /><i><%= unit %></i></div>' 
                    ].join(''),

            tagName: 'div',

            className: 'measurement-item card',

            getValue: function(){
                var _this = this,
                    value = _this.$('input').val();

                if(!value){ //Return if it is not filled
                    return;
                }

                value = parseFloat(value.replace(',','.').replace(/\s/g,''));

                if(isNaN(value)){ //return if it is still not a nummeric string
                    return;
                }

                if(_this.model.get('unittype') === 'percent' && value > 100 || value < 0){
                    App.toast('warning', 'Percent must be between 0 and 100');
                    return false;
                }

                return {
                        partid: _this.model.get('id'),
                        value: value
                    };
            }

        });

        return view;
});