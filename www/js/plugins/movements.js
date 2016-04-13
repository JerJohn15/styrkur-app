define('plugins/movements', 
	[
		'jquery',
		'underscore',
        'collections/muscles', 
        'collections/movements', 
        'workoutplans/exercises'
	], 
	function($, _, MuscColl, MoveColl, Exercises){
	
	var _loadData = function(){

            var deferred = new $.Deferred();

            var muscles = [];
            var movements = [];
            _.each(Exercises, function(value, key){
                var muscleid = value.id;
                muscles.push({id: muscleid, name: key });
                _.each(value.exercises, function(value, i){
                    movements.push({ id: value.id, name: value.name, muscle: muscleid })
                });
            });
            
            //First muscles
            _registerCollection(muscles, new MuscColl, function(){
                //Second is movements
                _registerCollection(movements, new MoveColl, function(){
                    deferred.resolve();
                });
            });

            return deferred;

        },
        _registerCollection = function(list, collection, onComplete){
            var i = 0,
                length = list.length,
                createNext = function(){
                    if(i === length){
                        setTimeout(onComplete, 0);
                        return;
                    }
                    var item = list[i];

                    i++;

                    if(item){
                        collection.create(item, {
                            success: createNext,
                            error: createNext
                        });
                    }
                    else{
                        createNext();
                    }
                };

            createNext();
        };

    return {
        load: _loadData
    };

});