define('views/session-list-item',
    [
        'base/base-view',
        'templates/session-list-item.html',
        'collections/session-instances'
    ],
    function(BaseView, Template, SessionInstances){

    var View = BaseView.extend({

        initialize: function(){
            this.options = {};
            View.__super__.initialize.apply(this, arguments);
        },
    
        Template: Template,

        tagName: 'div',

        className: 'session-list-item card card-outer',

        render: function(){
            var _this = this,
                sessionId = _this.model.get('id');

            View.__super__.render.apply(_this, arguments);

            return this;
        },

        events: {
            'click .session-list-content': 'goToItem',
            'click .session-list-log': 'goToLog'
        },

        'goToItem': function(e){
            e.preventDefault();
            var id = this.model.get('id');

            App.navigate('#/workout/' + id);
        },

        'goToLog': function(e){
            e.preventDefault();
            var id = this.model.get('id');

            App.navigate('#/history/session/' + id);
        }
    
    });
    
    return View;
    
});