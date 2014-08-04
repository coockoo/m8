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


    // -- Start io part
    var io = require('socket.io').listen(server);

    var Room = require('./models/room');
    var rooms = {};
    var clientsQueue = [];

    io.sockets.on('connection', function (socket) {
        console.log('Connected socket: ', socket.id);
        socket.on('join_room_attempt', function (data) {
            console.log('Attempt to join room with id [', data.roomId, ']');
            //If this room not exists we create it.
            var room = null;
            if (!rooms[data.roomId]) {
                room = new Room({id: data.roomId});
                room.setHost(data.client);
                rooms[data.roomId] = room;
                this.emit('set_mode', {mode: 'host'});
                this.emit('join_room', {peer: null});
            } else {
                room = rooms[data.roomId];
                if (!room.isFull()) {
                    console.log('guest can connect');
                    room.setGuest(data.client);
                    this.emit('set_mode', {mode: 'guest'});
                    this.emit('join_room', {peer: room.getHost()});
                    io.sockets.emit('guest_join_room', {peer: room.getGuest()})
                } else {
                    console.log('waiting. there is not enough room');
                    //TODO: wait.
                    // And when host leaves set first client as host and next one as guest (if there is one).
                    // If guest leaves replace him with other guest in queue
                    clientsQueue.push(data.client);
                }

            }
        }.bind(socket));
    });
    // -- end io part

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
