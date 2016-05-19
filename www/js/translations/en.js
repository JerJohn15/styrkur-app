define('translations/en', 
	[], 
	function(){
	'use strict';

	return {
		lang: 'en',
		langName: 'English',
		compatibilityJSON: 'v2',
		translation: {
			'dashboard': {
				'lastweek': 'Workouts last week',
				'lastweek_plural': 'Workouts last {{value}} weeks',
				'weeknum': 'Week number'
			},
			'shared': {
                'name': 'Name',
				'select': 'Select one',
				'close': 'Close',
				'back': 'Back',
				'continue': 'Continue',
                'next': 'Next',
				'complete': 'Complete',
				'save': 'Save',
				'cancel': 'Cancel',
				'ok': 'Ok',
				'date': 'Date',
				'comment': 'Comment',
                'sek': 'sek',
                'min': 'min',
                'enabled': 'Enabled',
                'toggledisabled': 'Toggle disabled',
                'description': 'Description'
			},
            'measure': {
                'title': 'Measurements',
                'measure': 'Measure',
                'addpart': 'Add part',
                'unittype': 'Unit type',
                'weight': 'Weight',
                'percent': 'Percent',
                'shortlen': 'Short length',
                'longlen': 'Long length',
                'add': 'Add',
                'nomeasure': 'You dont seem to have any measurements registered. Do you want to register one now?',
                'minnotmet': 'You need atleast two measurements',
                'lastwas': 'Last one was {{lastOne}} at {{lastDate}}'
            },
            'create': {
                'edit': 'Edit',
                'planner': 'Workout planner',
                'create': 'Create routine',
                'sessionname': 'Session name',
                'exercise': 'Exercise',
                'exercises': 'Exercises',
                'selectormake': 'Select or make your own',
                'estmin': 'Estimated time in minutes',
                'addset': 'Bæta við setti',
                'addexercise': 'Add exercise',
                'addsession': 'Add session',
                'get': 'Get more..',
                'setcurr': 'Set as current',
                'current': 'This is your current workout plan'
            },
			'workout': {
				'reps': 'Reps',
				'set': 'Set',
				'weight': 'Weight',
				'freerun': 'Free-run',
				'freeruntext': 'Not following the plan? That\'s no problem!',
				'log': 'Log',
				'goodjob': 'Good job!',
				'youlifted': 'You lifted',
				'muscle': 'Muscle',
				'movement': 'Movement',
				'addset': 'Add set',
                'addexercise': 'Add exercise',
				'musclegroup': 'Muscle group',
                'setsandpause': 'Sets & Pause'
			},
			'workouttype': {
				'type': 'Type',
				'weightrep': 'Weight/Reps',
				'weight': 'Weight',
				'reps': 'Repetitions',
				'distance': 'Distance',
				'time': 'Time',
				'beats': 'Heartrate'
			},
			'gender': {
				'gender': 'Kyn',
				'male': 'Karlmaður',
				'female': 'Kona'
			},
			'settings': {
				'title': 'Settings',
				'age': 'Age',
				'years': 'years',
				'goal': 'I want to..',
				'buildmuscle': 'Build muscles',
				'looseweight': 'Loose weight',
				'gethealthy': 'Get healthier',
				'weightgoal': 'Do you have a weight goal?',
				'unit': 'Units of measure',
				'appcolor': 'App colors',
				'blue': 'Blue',
				'red': 'Red',
				'orange': 'Orange',
				'pantone': 'Pantone',
				'language': 'Language'
			},
			'about': {
				'text': 'Styrkur is icelandic for strength. And that is just what this app is for.',
				'site': 'Visit us!',
				'thirdparty': '3rd party',
				'thanks': 'Special thanks to all the free and open-source software that this app is built on top of. It would not be as good if it was not for them.'
			}
		}
	};

});