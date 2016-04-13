define('views/plan/workout-list',
    [
        'base/list-view',
        'views/plan/workout-list-item',
        'collections/workouts',
        'templates/plan/workout-list.html'
    ],
    function(ParentView, ItemView, Collection, Template){
    
    var View = ParentView.extend({

        render: function(){
            var _this = this;
            View.__super__.render.apply(_this, arguments);

            _this.listenTo(App.User, 'change:workout', function(){
                _this.reRenderChildren();
            });

            return _this;
        },
    
        Template: Template,

        className: 'workout-table',

        tagName: 'div',

        listSelector: '.workout-list-items',

        ItemView: ItemView,
            
    });
    
    return View;
    
});
