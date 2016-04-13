define('views/create/session',
    [
        'base/list-view',
        'views/create/session-item',
        'collections/sessions',
        'templates/create/session.html'
        ,'backbone.stickit'
    ],
    function(ParentView, SessionItemView, Collection, Template, stickit){
    
    var View = ParentView.extend({
    
        Template: Template,

        options: {
            showDisabled: false
        },

        className: 'create-wizard create-session-view',

        render: function(){
            var _this = this,
                collection;

            _this.collection = collection = _this.model.model.get('sessions');

            _.extend(_this.options, { title: _this.model.model.get('name'), workoutid: _this.model.model.get('id') });

            _this.topOrder = collection.length ? collection.max(function(item){ return item.get('order'); }) : 0;
            View.__super__.render.apply(_this, arguments);

            _this.listenTo(this.collection, 'add', function(){
                _this.reRenderChildren();
            });

            _this.stickit(_this.model.model, _this.bindings);

            return this;
        },

        bindings: {
            'textarea[name="sessiondesc"]': 'description'
        },

        listSelector: '.sessions-list',

        ItemView: SessionItemView,
        
        events: {
            'click .btn-back': 'go-back',
            'click .btn-save': 'save',
            'click .btn-add-session': 'add-session',
            'click .btn-toggle-disabled': 'toggleDisabled',
            'click .dropdown-toggle': 'toggleDropdown'
        },

        'toggleDropdown': function(e, dropdownEl){
            if(e){
                e.preventDefault();
            }
            if(dropdownEl){
                dropdown = dropdownEl;
            }
            else {            
                var _this = this,
                    target = _this.$(e.currentTarget),
                    dropdown = target.siblings('.dropdown-menu');
            }

            dropdown.toggle();
        },

        'toggleDisabled': function(e){
            e.preventDefault();
            var _this = this;

            _this.options.showDisabled = _this.model.showDisabled = !_this.model.showDisabled;

            var parent = $(e.target).parent('.dropdown-menu');
            _this.toggleDropdown(undefined, parent);

            _this.reRenderChildren();
        },

        'go-back': function(e){
            e.preventDefault();

            //TODO: is the model dirty, ask if save first?
            App.navigate('#/plan/');
        },

        'add-session': function(e){
            e.preventDefault();

            this.collection.add({ order: ++this.topOrder });

            var parent = $(e.target).parent('.dropdown-menu');
            this.toggleDropdown(undefined, parent);
        },

        'save': function(e){
            if(e)
                e.preventDefault();

            var _this = this;

            _this.model.model.sync('update', _this.model.model, {
                success: function(){
                    App.toast('success', 'Workout plan saved');
                    if(App.Workout && (App.Workout.get('id') == _this.model.model.get('id'))){
                        App.Workout = _this.model.model;
                    }
                },
                error: function(){
                    App.toast('danger','Something went wrong!');
                    console.log(arguments);
                }
            });
            
        }
    
    });
    
    return View;
    
});
