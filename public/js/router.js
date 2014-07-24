/**
 * Created by coockoo on 7/23/14.
 */

define(
    ['backbone', 'controllers/app_controller', 'controllers/room_controller'],
    function(Backbone, AppController, RoomController) {

        var appController = new AppController();
        var roomController = new RoomController();


        var router = Backbone.Router.extend({
            routes: {
                '': 'index',
                'rooms/:id': 'showRoom'
            },
            index: function () {
                appController.showIndex();
            },
            showRoom: function (id) {
                roomController.showRoom(id);
            }
        });

        Backbone.Events.on('room:join', function (id) {
            Backbone.history.navigate('rooms/:id'.replace(':id', id), {trigger: true});
        });

        return router;
});

