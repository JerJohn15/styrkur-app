define('workoutplans/measurements', [], function(){
	
	return [{
                name: 'Weight',
                description: 'Choose a time of day, and always weigh your self at the same time. For example early morning before breakfast.',
                unittype: 'weight'
            },
            {
                name: 'Body Fat',
                description: '',
                unittype: 'percent' 
            },
            {
            	name: 'Chest',
                description: '',
                unittype: 'shortLength'
            },
            {
            	name: 'Shoulders',
                description: '',
                unittype: 'shortLength'
            },
            {
            	name: 'Arms',
                description: '',
                unittype: 'shortLength'	
            },
            {
            	name: 'Waist',
                description: '',
                unittype: 'shortLength'	
            }]	
})

