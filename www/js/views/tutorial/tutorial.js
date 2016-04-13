define('views/tutorial/tutorial',
    [
        'base/base-view',
        'templates/tutorial/tutorial.html'
        ,'backbone.stickit'
    ],
    function(BaseView, Template){

    var view = BaseView.extend({

        options: {
            currentStep: 0,
            onComplete: undefined
        },

        render: function(){
            var _this = this;
            view.__super__.render.apply(_this, arguments);

            _this.stickit();

            return _this;
        },

    	className: 'tutorial-view',
    
        Template: Template,

        events: {
            'click .btn-next': 'goToNext',
            'click .btn-done': 'allDone',
            'click .btn-skip': 'skip'
        },

        bindings: {
            '[name="age"]': 'age',
            '[name="gender"]': 'gender',
            '[name="goaltype"]': 'goalType',
            '[name="goal"]': 'targetWeight',
            '[name="units"]': 'units',

            '.tut-weight-goal .input-group-addon': {
                observe: 'units',
                onGet: function(value){
                    return value === 'metric' ? 'kg': 'lbs';
                }
            }
        },

        'goToNext': function(e){
            e.preventDefault();
            var _this = this,
                currentStep = _this.options.currentStep,
                counters = _this.$('.tutorial-top li'),
                sections = _this.$('section');

            if(currentStep === 1){
                if(_this.model.get('gender') === '' || _this.model.get('age') === '' || _this.model.get('units') === ''){
                    App.toast('info', 'Please fill in all required fields');
                    return false;
                }
            }
            else if(currentStep === 2){
                if(_this.model.get('goalType') === ''){
                    App.toast('info', 'Please fill in all required fields');
                    return false;
                }
            }

            currentStep = ++_this.options.currentStep;

            sections.removeClass('active');
            $(sections[currentStep]).addClass('active');
            
            counters.removeClass('active');
            $(counters[currentStep]).addClass('active');
        },

        'allDone': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.sync('update', _this.model, {
                success: function(){
                    _this.options.onComplete();
                    _this.Close();
                }
            });
        },

        'skip': function(e){
            e.preventDefault();
            var _this = this;

            _this.model.set('age', '30');
            _this.model.set('gender', '1');
            _this.model.set('goalType', '3');
            _this.model.set('targetWeight', '');
            _this.model.set('units','metric');

            _this.model.sync('update', _this.model, {
                success: function(){
                    _this.options.onComplete();
                    _this.Close();
                }
            });
        }
        
    });
    
    return view;
    
});