/**
 * Created by coockoo on 8/3/14.
 */

(function () {
    function Room (options) {
        var id = options.id;
        var host = null;
        var guest = null;

        this.getHost = function () {
            return host;
        };
        this.setHost = function (newHost) {
            host = newHost;
        };

        this.getGuest = function () {
            return guest;
        };
        this.setGuest = function (newGuest) {
            guest = newGuest;
        };

        this.setId = function (roomId) {
            id = roomId;
        };
        this.getId = function () {
            return id;
        };
        this.isFull = function () {
            return (host != null) && (guest != null);
        }

    }

    module.exports = Room;
})();
