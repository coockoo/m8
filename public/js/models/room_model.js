/**
 * Created by coockoo on 7/30/14.
 */

define(
    ['backbone'],
    function (Backbone) {
        return Backbone.Model.extend({
            urlRoot: '/api/rooms'
        });
    }
);
