define('views/history/exercises-item',
    [
        'base/base-view',
        'templates/history/exercise-item.html',
        'collections/set-instances'
    ],
    function(BaseView, Template, Sets){

    var View = BaseView.extend({

        render: function(){
            var _this = this;

            this.options = {
                units: App.enums.units.getAll()
            }

            View.__super__.render.apply(_this, arguments);

            return _this;
        },

    	tagName: 'div',

        className: 'card',
    
        Template: Template,
    
    });
    
    return View;
    
});