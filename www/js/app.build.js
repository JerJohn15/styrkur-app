({
    paths: {
        'jquery': '../libs/jquery/jquery-2.0.3.min',
        'underscore': '../libs/underscore/underscore-min',
        'backbone': '../libs/backbone/backbone',
        'backbone.stickit': '../libs/backbone/backbone.stickit',
        'backbone-wreqr': '../libs/backbone/backbone-wreqr',
        'backbone-websql': '../libs/backbone/backbone-websql',
        'moment': '../libs/moment/moment',
        'toastr': '../libs/toastr/toastr',
        'chartist': '../libs/chart/chartist'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery', ''],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'backbone.stickit': {
            deps: ['backbone', 'jquery']
        }
    },

    optimize: 'none',

    baseUrl: './',

    name: 'main',

    excludeShallow: ['main'],

    out: './main_app.js'
})