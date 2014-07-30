/**
 * Created by coockoo on 7/23/14.
 */

define(
    [],
    function () {
        function RoomController () {

            this.showRoom = function (roomId) {
                //TODO: create room model.
                require(['views/app_view','views/room_view', 'models/room_model'], function (appView, RoomView, Room) {
                    var room = new Room({id: roomId});
                    room.fetch({
                        success: function (model, response, options) {
                            console.log('fetched: ', model);
                            var roomView = new RoomView({model: model});
                            appView.render(roomView);
                        },
                        error: function (model, response, options) {
                            console.log('error occurred');
                        }
                    });
                });
            }

        }
        return RoomController;
    }
);
