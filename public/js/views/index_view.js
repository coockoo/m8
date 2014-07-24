/**
 * Created by coockoo on 7/23/14.
 */

define(
    ['underscore', 'backbone', 'text!../../templates/app/index.ejs'],
    function (_, Backbone, template) {
        return Backbone.View.extend({
            tagName: 'div',
            template: _.template(template),
            events: {
                "submit form.join-room-form": "joinRoom"

            },
            joinRoom: function (e) {
                var roomId = this.$el.find('#join-room-id').val();
                if (roomId != '') {
                    Backbone.Events.trigger('room:join', roomId);
                }
                e.preventDefault();
            },
            render: function () {
                this.$el.html(this.template({}));
                return this;
            }
        });
    }
);
