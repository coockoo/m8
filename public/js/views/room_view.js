/**
 * Created by coockoo on 7/24/14.
 */

define(
    ['underscore', 'backbone', 'text!../../templates/rooms/room.ejs'],
    function (_, Backbone, template) {

        return Backbone.View.extend({
            tagName: 'div',
            template: _.template(template),
            render: function () {
                //TODO: change hardcore.
                this.$el.html(this.template({roomId: 1}));
                return this;
            }
        });

    }
);
