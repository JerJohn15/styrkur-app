define('views/freerun/history-session-item',
    [
        'base/base-view',
        'templates/freerun/history-session-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){

    var View = BaseView.extend({

        initialize: function(opt){
            var _this = this;
            _this.options = _this.options || {};
            _.extend(_this.options, opt);
        },

        render: function(){
            var _this = this;

            _.extend(_this.options, {
                formatedDate : moment(_this.model.date ).format(App.enums.units.dateTime()),
                units: App.enums.units.getAll()
            });

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'div',

        className: 'card',
    
        Template: Template,

        events: {
            'click td': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                parent = _this.model.get('parent'),
                id = _this.model.get('id');
            App.navigate('#/freerun/history/');
        }
    
    });
    
    return View;
    
});