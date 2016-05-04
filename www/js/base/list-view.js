define('base/list-view',
    [
        'base/base-view'
    ],
    function(BaseView){
    'use strict';
    
    var View = BaseView.extend({

        initialize: function(){
            this.children = [];
        },

        ItemView: undefined,

        listSelector: '',
    
        render: function(){
            var _this = this;
            //Render the view itself first
            View.__super__.render.apply(_this, arguments);
            
            _this.renderChildren();

            return _this;
        },

        addChild: function(model){
            var _this = this,
                itemView = new _this.ItemView();

            itemView.model = model;

            if(_this.options){
                itemView.options = itemView.options || {};
                _.extend(itemView.options, { parent: _this.options });
            }

            _this.children.push(itemView);
            
            _this.$(_this.listSelector).append(itemView.render().el);
        },

        reRenderChildren: function(){
            this.closeChildren();
            this.renderChildren();
        },

        renderChildren: function(){
            var _this = this;

            _this.collection.each(function(item){
                var itemView = new _this.ItemView();
                itemView.model = item;

                if(_this.options){
                    itemView.options = itemView.options || {};
                    _.extend(itemView.options, { parent: _this.options });
                }

                _this.children.push(itemView);

                _this.$(_this.listSelector).append(itemView.render().el);
            });
        },
        
        Close: function() {
            this.closeChildren();
            return View.__super__.Close.call(this, arguments);
        },

        //Close all child views
        closeChildren: function(){
            _.each(this.children, function(view){
                view.Close();
            });
            this.children = [];
        }
    
    });

    return View;
});
