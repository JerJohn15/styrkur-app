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


    var getMax = function(list, fn){
        var maxItem;
        var maxVal = -9007199254740991; //Number.MIN_SAFE_INTEGER
        list.forEach(function (item) {
            var current = fn(item);
            if (current > maxVal){
                maxVal = current;
                maxItem = item;
            }
        });
        return maxItem;
    }

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
                //elements = [],
                count = 0,
                fragment = document.createDocumentFragment();

            _this.collection.forEach(function(item){
                var match = _this.instances.filter(function(it){ return it.get('parent') === item.get('id'); }),
                    last = getMax(match, function(it){ return it.get('date'); }),
                    options = {
                        workoutid: _this.workoutId,
                        last: (last && last.get) ? moment(last.get('date')).format( App.enums.units.shortDateTime() ) : false,
                        count: match.length
                    },
                    itemView = new _this.ItemView();
                
                itemView.options = options;
                itemView.model = item;

                _this.children.push(itemView);

                fragment.appendChild(itemView.render().el)
                ++count;
                //elements.push(itemView.render().el);
            });
            if(count){
                _this.el.appendChild(fragment);
            }
        },
        
        Close: function() {
            this.children.forEach(function(view){
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
