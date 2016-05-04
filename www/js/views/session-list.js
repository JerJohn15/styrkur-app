define('views/session-list',
    [
        'base/base-view',
        'views/session-list-item',
        'collections/sessions',
        'collections/session-instances',
        'templates/session-list.html'
        ,'moment'
    ],
    function(ParentView, ItemView, Collection, Instances, Template){
    'use strict';

    var View = ParentView.extend({

        initialize: function(){
            this.children = [];
        },

        render: function(){
            var _this = this,
                instances = new Instances(),
                doRender = function(){
                    View.__super__.render.apply(_this, arguments);
                    _this.renderChildren();
                };

            instances.fetch({
                success: function(){
                    _this.instances = instances;
                    doRender();
                },
                error: function(){
                    console.log(arguments);
                    doRender();
                }
            });

            return _this;
        },

        renderChildren: function(){
            var _this = this,
                elements = [];

            _this.collection.each(function(item){
                var match = _this.instances.filter(function(it){ return it.get('parent') === item.get('id'); }),
                    last = _.max(match, function(it){ return it.get('date'); }),
                    options = {
                        workoutid: _this.workoutId,
                        last: (last && last.get) ? moment(last.get('date')).format( App.enums.units.shortDateTime() ) : false,
                        count: match.length
                    },
                    itemView = new _this.ItemView();
                
                itemView.options = options;
                itemView.model = item;

                _this.children.push(itemView);

                elements.push(itemView.render().el);
            });
            if(elements.length){
                _this.$el.append(elements);
            }
        },
        
        Close: function() {
            _.each(this.children, function(view){
                view.Close();
            });
            this.children = [];

            return View.__super__.Close.call(this, arguments);
        },

        Template: Template,

        className: 'session-table',

        tagName: 'div',

        listSelector: '',

        ItemView: ItemView,
            
    });
    
    return View;
    
});
