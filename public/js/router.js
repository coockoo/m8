/**
 * Created by coockoo on 7/23/14.
 */

define(['backbone', 'controllers/app_controller'], function(Backbone, AppController) {
    var appController = new AppController();
    return Backbone.Router.extend({
        routes: {
            '': 'index',
            'room/:id': 'showRoom'
        },
        index: function () {
            appController.showIndex();
        },
        showRoom: function (id) {

        }

    });
});
