/**
 * Created by coockoo on 7/23/14.
 */

define([], function () {
    function AppController () {

        this.showIndex = function () {
            require(['views/app_view', 'views/index_view'], function (appView, IndexView) {
                var indexView = new IndexView();
                appView.render(indexView);
            })
        }

    }
    return AppController;

});
