define('views/widgets/chart',
    [
        'base/base-view',
        'collections/session-instances',
        'chartist'
        ,'moment'
    ], 
    function(BaseView, SessionsCollection, Chartist){
    'use strict';
    
    var _getRange = function(week){
            var thisWeek = week || moment().week(),
                list = [];

            while(thisWeek > 0 && list.length < 12){
                list.unshift(thisWeek--);
            }

            thisWeek = 52;
            while(list.length < 12){
                list.unshift(thisWeek--);
            }
            
            return list;
        },

        view = BaseView.extend({

            Template: '<div class="ct-chart"></div><p><%= t("dashboard.weeknum") %></p>',

            className: 'last-workouts',
            
            render: function(){
                var _this = this,
                    ctx,
                    collection = new SessionsCollection(),
                    windowWidth = $(window).innerWidth(),
                    date = new Date().getTime(),
                    dnow = (date + 86400000),
                    dmonth = (date - 3 * 2592000000); //last 3 months

                collection.fetch({
                    filter: function(item){ return item.date > dmonth && item.date < dnow; },  //'date between ' + dmonth + ' and ' + dnow,
                    success: function(col, items){

                        var dates = _.map(items, function(a){ return a.date; }),
                            groups,
                            svg,
                            maxVal = 1,
                            data = {
                                labels: _getRange(),
                                series: []
                            };

                        //Group items by week
                        groups = _.groupBy(dates, function(item){
                            return moment(item).week();
                        });

                        data.series = [_.map(data.labels, function(lbl){
                                        return groups[lbl] ? groups[lbl].length : 0;
                                    })];
                        
                        view.__super__.render.apply(_this, arguments);

                        //Resize canvas for window
                        svg = _this.$('.ct-chart');

                        _this.chart = new Chartist.Line(svg[0], data, {
                            fullWidth: true,
                            scaleMinSpace: 1,
                            chartPadding: {
                                right: 40
                            }
                        });
                    }
                });

                return _this;
            },

            Close: function(){
                var _this = this;
                _this.chart.detach();
                delete _this.chart;
                view.__super__.Close.apply(_this, arguments);
            }
        
        });
    
    return view;
});