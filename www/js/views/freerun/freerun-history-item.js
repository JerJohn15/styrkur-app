define('views/freerun/freerun-history-item',
    [
        'base/base-view',
        'templates/freerun/freerun-history-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){
    'use strict';

    var View = BaseView.extend({

        render: function(){
            var _this = this;

            _this.options = {
                formatedDate : moment(_this.model.get('date') ).format(App.enums.units.dateTime())
            };

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'tr',
    
        Template: Template,

        events: {
            'click': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                id = _this.model.get('id');
            App.navigate('#/freerun/history/' + id);
        }
    
    });
    
    return View;
    
});