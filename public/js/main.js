/**
 * Created by coockoo on 7/22/14.
 */
require.config({
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    },
    paths: {
        'text': '/bower_components/requirejs-text/text',
        'backbone': '/bower_components/backbone/backbone',
        'jquery': '/bower_components/jquery/dist/jquery',
        'underscore': '/bower_components/underscore/underscore'
    }
});

require(['app'],function (App) {
    new App();
});
