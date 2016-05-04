define('views/measurements/measurement-item',
    [
        'base/base-view',
        'templates/measurements/measurements-item.html',
        'chartist'
        ,'moment'
    ],
    function(BaseView, Template, Chartist){
    'use strict';

        var view = BaseView.extend({

                initialize: function(){
                    var _this = this;
                    _this.options = _this.options || {};
                    _.extend(_this.options,{
                            noData: false,
                            lastOne: undefined
                        });
                    view.__super__.initialize.apply(_this, arguments);
                },

                render: function(){
                    var _this = this,
                        svg,
                        data;
                        
                    if(_this.model.get('items').length === 0){
                        _this.options.noData = true;
                        _this.options.lastOne = 
                        view.__super__.render.apply(_this, arguments);
                    }
                    else if(_this.model.get('items').length < 2){
                        _this.options.noData = true;
                        var lastOne = _this.model.get('items')[0];
                        _this.options.lastOne = lastOne.value;
                        _this.options.lastDate = moment(lastOne.date).format(App.enums.units.shortDate());
                        view.__super__.render.apply(_this, arguments);
                    }
                    else {
                        view.__super__.render.apply(_this, arguments);

                        data = {
                            labels: _.map(_this.model.get('items'), function(item){
                                        return moment(item.date).format(App.enums.units.shortDate());
                                    }),
                            series: [_.pluck(_this.model.get('items'),'value')]
                        };
                        
                        if(!_this.$('.ct-chart').length){
                            return _this;
                        }

                        svg = _this.$('.ct-chart')[0];

                        _this.chart = new Chartist.Line(svg, data, {
                            fullWidth: true,
                            chartPadding: {
                                right: 40
                            }
                        });
                    }

                    return _this;
                },
                
                Template: Template,

                tagName: 'div',

                className: 'card',

                Close: function(){
                    var _this = this;
                    if(_this.chart){
                        _this.chart.detach();
                        delete _this.chart;
                    }
                    view.__super__.Close.apply(_this, arguments);
                }

            });

        return view;

});