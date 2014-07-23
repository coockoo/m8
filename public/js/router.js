/**
 * Created by coockoo on 7/23/14.
 */

define(['backbone'], function(Backbone) {
    return Backbone.Router.extend({
        routes: {
            '': 'index',
            'users/:id': 'showUser'
        },
        index: function () {
            console.log('in index');
        },
        showUser: function (id) {
            console.log('showing user with id: ', id);
        }

    });
});
