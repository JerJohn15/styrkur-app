define('views/widgets/tutorial',
    [
        'base/base-view',
        'templates/widgets/tutorial.html'
    ], 
    function (BaseView, Template) {
    
    var view = BaseView.extend({

        Template: Template,

        className: 'well tutorial slides-view',

    });

    return view;
})
