/**
 * Created by coockoo on 7/23/14.
 */

define(
    [],
    function () {
        function RoomController () {

            this.showRoom = function (roomId) {
                //TODO: create room model.
                require(['views/app_view','views/room_view'], function (appView, RoomView) {
                    var roomView = new RoomView();
                    appView.render(roomView);
                });
            }

        }
        return RoomController;
    }
);
