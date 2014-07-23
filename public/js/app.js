/**
 * Created by coockoo on 7/23/14.
 */

define(['backbone', 'router'], function (Backbone, Router) {
    function App () {
        new Router();
        Backbone.history.start({pushState: true});
    }
    return App;
});
