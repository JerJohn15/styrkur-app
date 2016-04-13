define('views/history/session-list-item',
    [
        'base/base-view',
        'templates/history/session-list-item.html',
        'jquery'
        ,'moment'
    ],
    function(BaseView, Template){

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
            'click td': 'goTo'
        },

        'goTo': function(e){
            var _this = this,
                parent = _this.model.get('parent'),
                id = _this.model.get('id');
            App.navigate('#/history/exercises/' + parent + '/' + id);
        }
    
    });
    
    return View;
    
});