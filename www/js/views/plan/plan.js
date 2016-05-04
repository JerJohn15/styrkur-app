define('views/plan/plan',
    [
        'base/parent-view',
        'templates/plan/plan.html',
        'views/plan/workout-list',
        'collections/workouts'
    ],
    function(BaseView, Template, WorkoutList, WorkoutColl){
    'use strict';

    var View = BaseView.extend({
    
        Template: Template,

        className: 'view-plan',

        render: function(){
            var _this = this,
                workoutList = new WorkoutList(),
                collection = new WorkoutColl();

            View.__super__.render.apply(this, arguments);

            workoutList.collection = collection;

            collection.fetch({
                success: function(){
                    _this.ShowChild(workoutList, '.workout-list');
                }
            });

            return _this;
        }
    
    });
    
    return View;
    
});
