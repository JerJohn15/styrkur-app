define('views/measurements/measurements',
    [
        'backbone',
        'base/list-view',
        'views/measurements/measurement-item',
        'templates/measurements/measurements.html',
        'collections/body-parts',
        'collections/measurements'
    ],
    function(Backbone, BaseView, ItemView, Template, BodyCollection, Measurements){
    'use strict';

    var _createCollection = function(){
            var _this = this,
                collection = {};
            _this.parts.each(function(part){
                    var model = part.toJSON();
                    model.items = []
                    collection[model.id] = model;
                });
            _this.measurements.each(function(measurement){
                    _.each(measurement.get('items'), function(item){
                        var part = collection[item.partid];
                        if(!part) return;
                        item.date = measurement.get('date');
                        part.items.push(item);
                    });
                });

            _this.collection = new Backbone.Collection(_.values(collection));
        },

        view = BaseView.extend({

            initialize: function(){
                var _this = this;
                _this.options = _this.options || {};
                _.extend(_this.options, {
                    goalTypes: App.enums.goals,
                    noData: false
                });
                view.__super__.initialize.apply(_this, arguments);
            },

            render: function(){
                var _this = this,
                    done = 0,
                    onRender = function(){
                        view.__super__.render.apply(_this, arguments);
                    },
                    onSuccess = function(){
                        ++done;
                        if(done === 2){
                            if(_this.measurements.length){
                                _createCollection.call(_this);   
                            }else {
                                _this.options.noData = true;
                                _this.collection = new Backbone.Collection([]);
                            }
                            onRender();
                        }
                    },
                    onError = function(){
                        _this.options.noData = true;
                        onRender();
                    };

                _this.parts = new BodyCollection;
                _this.measurements = new Measurements;

                _this.parts.fetch({
                    success: onSuccess,
                    error: onError
                });
                _this.measurements.fetch({
                    success: onSuccess,
                    error: onError
                });

                return _this;
            },
        
            Template: Template,

            ItemView: ItemView,

            listSelector: '.measurement-items',

            className: 'measurement-view'
        
        });
        
    return view;
    
});