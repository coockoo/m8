/**
 * Created by coockoo on 7/23/14.
 */

define(['backbone'], function (Backbone) {

    var AppView = Backbone.View.extend({
        el: 'body',
        render: function (childView) {
            this.$el.html(childView.render().$el);
            return this;
        }

    });
    return new AppView();
});
