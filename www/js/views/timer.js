define('views/timer',
    [
        'base/base-view',
        'templates/timer.html'
    ],
    function(BaseView, Template, moment){

    var _diffTime = function(timer){
            var seconds = ((new Date).getTime() - timer.getTime()) / 1000,
                minutes = parseInt(seconds / 60);
            seconds = parseInt(seconds % 60);
            if(seconds < 10){
                seconds = '0' + seconds;
            }
            return (minutes ? minutes + ':' : '0:') + seconds
        },

        started = false,

        View = BaseView.extend({
    
            Template: Template,

            className: 'timer-container',

            events: {
                'click .btn-toggle-timer': 'toggle-timer',
                'click .btn-reset-timer': 'reset-timer'
            },

            'toggle-timer': function(e){
                e.preventDefault();
                var _this = this,
                    _updateTime = function(){
                        _this.$('h1').text( _diffTime(_this.timer) )
                    };

                e.target.innerText = started ? 'Start' : 'Split';

                if(!_this.timer){
                    _this.timer = new Date;
                }

                if(!started){
                    started = true;
                    _this.$('.spinner').removeClass('paused').removeClass('stopped');
                    _updateTime();
                    _this.interval = setInterval(_updateTime, 1000);
                }
                else {
                    _this.$('.spinner').addClass('paused').removeClass('stopped');
                    started = false;
                    clearInterval(_this.interval)
                }
            },

            'reset-timer': function(e){
                var _this = this;
                e.preventDefault();

                _this.interval ? clearInterval(_this.interval) : false;
                _this.timer = undefined;
                started = false;

                _this.$('.spinner').removeClass('paused').addClass('stopped');

                _this.$('.btn-toggle-timer').text('Start');
                _this.$('h1').text('Not started');
            }
        
        });
    
    return View;
    
});