define('views/plan/server-list',
    [
        'base/list-view',
        'views/plan/server-item',
        'collections/serveritems',
        'templates/plan/server-list.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    
    var View = ParentView.extend({

        render: function(){
            var _this = this;
            View.__super__.render.apply(_this, arguments);

            return _this;
        },
    
        Template: Template,

        className: 'server-list',

        tagName: 'div',

        listSelector: '.workout-table',

        ItemView: ItemView
            
    });
    
    return View;
    
});
