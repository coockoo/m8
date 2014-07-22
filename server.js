/**
 * Created by coockoo on 7/22/14.
 */


(function () {
    var express = require('express');
    var jade = require('jade');
    var app = express();

    app.engine('jade', jade.__express);
    app.set('view engine', 'jade');

    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use('/public', express.static(__dirname + '/public'));

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.listen(3000);

})();
