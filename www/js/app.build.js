({
    paths: {
        'jquery': '../libs/jquery/jquery-2.0.3.min',
        'underscore': '../libs/underscore/underscore-min',
        'backbone': '../libs/backbone/backbone',
        'backbone.stickit': '../libs/backbone/backbone.stickit',
        'backbone-wreqr': '../libs/backbone/backbone-wreqr',
        'backbone-db': '../libs/backbone/backbone.indexeddb',
        'moment': '../libs/moment/moment',
        'toastr': '../libs/toastr/toastr',
        'chartist': '../libs/chart/chartist',
        'i18next': '../libs/i18next/i18next.min'
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
        },
        'backbone-db': {
            deps: ['backbone']
        }
    },

    optimize: 'none',

    baseUrl: './',

    name: 'main',

    excludeShallow: ['main'],

    out: './main_app.js'
})