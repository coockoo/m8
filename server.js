/**
 * Created by coockoo on 7/22/14.
 */


//TODO: add socket.io dependency (hardcoded directory now)
(function () {
    var express = require('express');
    var jade = require('jade');
    var http = require('http');
    var app = express();
    var server = http.createServer(app);
    var port = 3000;

    app.engine('jade', jade.__express);
    app.set('view engine', 'jade');

    app.use('/bower_components', express.static(__dirname + '/bower_components'));
    app.use('/public', express.static(__dirname + '/public'));


    var io = require('socket.io').listen(server);
    io.sockets.on('connection', function (socket) {
        console.log('Connected socket: ', socket.id);
    });

    app.get('/api/rooms/:id', function (req, res) {
        //TODO: make fine room creation
        res.send(200, {id: req.params.id, data: [], ownerId: 1});
    });

    app.get('*', function (req, res) {
        res.render('index');
    });

    server.listen(port);

    console.log('Server started at port ' + port);

})();
