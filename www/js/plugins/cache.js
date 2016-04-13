define('plugins/cache',
	[], 
	function(){

	/*
		Options:
			keeponnav bool: we should keep the object when we navigate away
			type string: name the object to be placed on the view (model/collection/extras)
	*/
	
	var cache = function(){
		this.cache = {};
	};

	cache.prototype = {

		construct: function(){
			var _this = this;

			_this.ready = true;
			
			App.Events.on('navigate:done', function(name){ 
				//TODO; check if we should clear model on cache
				var names = []
				_.each(_this.cache, function(value, key){
					if(name != key && (value.options && !value.options.keeponnav)){
						names.push(key);
					}
				});
				_.each(names, function(remName){
					_this.clear(remName);
				});
			});
		},

		showView: function(view, name){
			var _this = this,
				cache;

			if(_this.cache[name]){
				cache = _this.cache[name];
				view[cache.options.type ? cache.options.type : 'model'] = cache.model;
			}
			App.showView(view);
		},

		setModel: function(name, model){
			var _this = this;
			if(_this.cache[name]){
				_this.cache[name].model = model;
			}
			else {
				_this.init(name, model, {});
			}

			return model;
		},

		getModel: function(name){
			var _this = this;
			if(_this.cache[name]){
				return _this.cache[name].model;
			}
		},

		init: function(name, model, options){
			var _this = this;
			if(!_this.ready){
				_this.construct();
			}
			_this.cache[name] = { model: model, options: (options || {}) }
		},

		exists: function(name){
			return this.cache[name] !== undefined;
		},

		clear: function(name){
			var _this = this;
			if(_this.cache[name]){
				_this.cache[name] = undefined;
				delete _this.cache[name];
			}
		}

	};


	return cache;

});