define('views/freerun/freerun-history-list',
    [
        'base/list-view',
        'templates/freerun/freerun-history-list.html',
        'views/freerun/freerun-history-item'
    ],
    function(BaseView, Template, ItemView){
    'use strict';
    
    var View = BaseView.extend({
    
        Template: Template,

        ItemView: ItemView,

        listSelector: 'tbody',

        events: {
            'click .btn-back': 'go-back'
        },

        'go-back': function(e){
            e.preventDefault();

            App.navigate('#/workout/');
        }
    
    });
    
    return View;
    
});