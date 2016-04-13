define('views/history/graph-sessions-item',
    [
        'base/base-view',
        'templates/history/graph-sessions-item.html',
        'chartist'
        ,'moment'
    ],
    function(BaseView, Template, Chartist){

    var _colors = ['187,151,205','151,187,205','220,220,220', '80,80,255', '0,0,200'],
        _getColor = function(no, alpha){
            return 'rgba(' + _colors[no] + ',' + alpha + ')'
        },

        view = BaseView.extend({

            render: function(){
                var _this = this,
                    counterType = _this.counterType()
                    workedData = _this.createModel(counterType),
                    data = undefined;

                _this.model = workedData[0];
                data = workedData[1];

                view.__super__.render.apply(_this, arguments);
/*
                minVal = minVal > 10 ? minVal / 1.2 : 0;

                _this.ctx = _this.$('canvas')[0].getContext("2d");
                (_this.chart = new Chart(_this.ctx)).Line(data,{
                                scaleStartValue: minVal,
                                scaleSteps: (maxVal + 2 - minVal),
                                scaleStepWidth: 1,
                                scaleOverride: true,
                                animationSteps: 45
                            });

                return _this;
*/

                var el = _this.$('.ct-chart');
                
                if(data.labels.length < 2){
                    el.text('Need atleast 2 sessions graph');
                }
                else {
                    _this.chart = new Chartist.Line(el[0], data, {
                        fullWidth: true,
                        chartPadding: {
                            right: 40
                        }
                    });
                }

                return _this;
            },

            counterType: function(){

                switch(this.model.get('type')){
                    case 'weightrep':
                        return 'weight';
                        break;
                    default:
                        return this.model.get('type');
                        break;
                }

            },

            createModel: function(counter){
                var _this = this,
                    legends = [],
                    data = {
                        labels: [],
                        series: []
                    },
                    maxVal = 1,
                    minVal = 9999,
                    models = _.sortBy(_this.model.get('items'), 'date');


                _.each(models, function(session){
                    data.labels.push( 
                            moment(session.date).format(App.enums.units.shortDate())
                        );
                    _.each(session.sets, function(set, i){
                        var color = '#' + i + i + i + i + i + i + '',
                            parsedVal = parseInt(set[counter]);

                        data.series[i] = data.series[i] || [];

                        data.series[i].push(parsedVal);
                    });
                });


                return [
                    { 
                        exercise: _this.model.get('exercise'), 
                        muscle: _this.model.get('muscle'),
                        legends: legends 
                    }, 
                    data
                    ];

            },

        	tagName: 'div',

            className: 'graph-exercise clearfix card',
        
            Template: Template,

            Close: function(){
                var _this = this;
                _this.chart ? _this.chart.detach() : false;
                delete _this.chart;
                view.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return view;
    
});