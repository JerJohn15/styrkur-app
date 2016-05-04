define('views/dashboard',
    [
        'base/base-view',
        'templates/dashboard.html',
        'views/widgets/chart'
    ], 
    function (BaseView, Template, ChartView) {
    'use strict';

    var view = BaseView.extend({

    	render: function(){
    		var _this = this,
    			chartview;
                
    		view.__super__.render.apply(_this, arguments);

            chartview = new ChartView();
            _this.$('.chart-lastweeks').append(chartview.render().el);
            _this.chartView = chartview;

    		return _this;
    	},

        Template: Template,

        className: 'dashboard-view card',

    	Close: function(){
    		var _this = this;
    		if(_this.chartView){
            _this.chartView.Close();
        }
        if(_this.tutorialView){
            _this.tutorialView.Close();
        }
            
    		return view.__super__.Close.apply(_this, arguments);
    	}

    });

    return view;
});
