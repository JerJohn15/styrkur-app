define('views/history/session-list',
    [
        'base/list-view',
        'templates/history/session-list.html',
        'views/history/session-list-item'
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