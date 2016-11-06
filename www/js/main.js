require([
    'jquery',
    'underscore',
    'application',
    'router',
    'backbone',
    'backbone-websql',
    'templates/templates',
    'chartist',
    'plugins/setup',
    'plugins/side-menu',
    'i18next',

    /* Collections */
    'collections/users', 'collections/exercise-instances',
    'collections/exercises', 'collections/session-instances',
    'collections/sessions', 'collections/set-instances',
    'collections/workouts', 'collections/body-parts','collections/measurements',
    'collections/movements', 'collections/muscles',
    'models/appinfo', 'plugins/movements',

    'translations/en',
    'translations/fr',
    'translations/is',

    /* Views */
    'views/workout-wizard', 'views/menu', 'views/dashboard',
    'views/history/session-list',
    'views/history/exercises',
    'views/plan/plan', 'views/create/exercises',
    'views/create/workout',
    'views/create/session',
    'views/create/exercises',
    'views/about', 'views/timer',
    'views/settings/settings',
    'views/history/graph-sessions',
    'views/measurements/measurements',
    'views/measurements/measurements-add',
    'views/measurements/bodypart-add',
    'views/tutorial/tutorial',
    'views/license',
    'views/plan/server-list',
    'components/menu',
    'views/freerun/freerun',
    'views/freerun/freerun-history-list',
    'views/freerun/history-session',

    /* Workouts */
    'workoutplans/simple3split','workoutplans/measurements'

], function () {
});