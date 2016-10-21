define('views/set-item',
    [
        'backbone',
        'base/base-view',
        'templates/set-item.html'
    ],
    function(Backbone, BaseView, Template, SessionInstances){
    'use strict';

    var _ = Backbone.utils;
    
    var View = BaseView.extend({
    
        Template: Template,

        tagName: 'div',

        className: 'form-box',

        initialize: function(){
            this.options = {
                index : "unknown"
            };
        },

        render: function(){
            var _this = this;
            _this.options.units = App.enums.units.getAll();

            View.__super__.render.apply(_this, arguments);

            _this.toggleViews();

            //_this.stickit();

            return _this;
        },

        toggleViews: function(){
            var _this = this,
                exType = _this.options.exType,
                matched = App.enums.workoutTypes[exType];

            _.each(matched, function(item){
                _this.$('.type-' + item, true).style.display = 'block';
            });
        },
/*
        bindings: {
            '.input-reps': 'reps',
            '.input-weight': 'weight',
            '.input-beats': 'beats',
            '.input-distance': 'distance',
            '.input-time': 'time',
            '.input-comment': 'comment'
        },
*/
        events: {
            'click .btn-comment': 'toggle-comment',

            'click .btn-timer': 'run-timer',

            'touchstart .subtract-reps': 'subtract-reps-multi',
            'touchend .subtract-reps': 'stop-timer',
            'touchstart .add-reps': 'add-reps-multi',
            'touchend .add-reps': 'stop-timer',

            'touchstart .subtract-weight': 'subtract-weight-multi',
            'touchend .subtract-weight': 'stop-timer',
            'touchstart .add-weight': 'add-weight-multi',
            'touchend .add-weight': 'stop-timer',
        },

        'toggle-comment': function(e){
            e.preventDefault();
            this.$('.comment-box-modal').toggle();
            this.$('.comment-box-modal textarea').focus();
        },

        'subtract-reps-multi': function(e){
            e.preventDefault();
            var _this = this,
                reps = this.model.get('reps'),
                addOne = function(){
                    if(reps === 0){
                        return;
                    }
                    _this.model.set('reps', (reps !== undefined) ? --reps : 0 );
                    _this.addTimer = setTimeout(addOne, 500);
                };
            addOne();
        },

        'add-reps-multi': function(e){
            e.preventDefault();
            var _this = this,
                reps = this.model.get('reps'),
                addOne = function(){
                    _this.model.set('reps', (reps !== undefined) ? ++reps : _this.options.lastReps );
                    _this.addTimer = setTimeout(addOne, 300);
                };

            addOne();
        },

        'subtract-weight-multi': function(e){
            e.preventDefault();
            var _this = this,
                weight = this.model.get('weight'),
                addOne = function(){
                    if(weight === 0){
                        return;
                    }
                    _this.model.set('weight', (weight !== undefined) ? --weight : 0 );
                    _this.addTimer = setTimeout(addOne, 500);
                };
            addOne();
        },

        'add-weight-multi': function(e){
            e.preventDefault();
            var _this = this,
                weight = this.model.get('weight'),
                addOne = function(){
                    _this.model.set('weight', (weight !== undefined) ? ++weight : _this.options.lastWeight );
                    _this.addTimer = setTimeout(addOne, 300);
                };

            addOne();
        },

        'stop-timer': function(e){
            e.preventDefault();
            clearTimeout(this.addTimer);
        },

        'run-timer': (function(){
            var interval;
            return function(e){
                e.preventDefault();
                var _this = this,
                    time = parseInt(this.options.pause),
                    $span = _this.$('span.timer'),
                    blink = function(){
                        //TODO: add vibrate?!?
                        $span.text('');
                        $span.addClass('blink');
                        setTimeout(function(){
                            $span.removeClass('blink');
                        }, 4000);
                    };
                if(interval){ //Reset old interval
                    clearInterval(interval);
                    interval = undefined;
                    return;
                }

                interval = setInterval(function(){
                    $span.text(--time);
                    if(time === 0){
                        clearInterval(interval);
                        interval = undefined;
                        App.vibrate(1000);
                        blink();
                    }
                }, 1000);

                $span.text(time);
            };

        }())
    
    });
    
    return View;
    
});