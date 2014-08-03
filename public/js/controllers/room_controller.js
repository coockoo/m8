/**
 * Created by coockoo on 7/23/14.
 */

define(
    ['io'],
    function (io) {
        function RoomController () {

            this.showRoom = function (roomId) {
                //Default host
                var mode = 'host';
                var socket = io.connect();
                socket.emit('join_room_attempt', {roomId: roomId, client: 'todo'});
                socket.on('join_room', function (data) {
                    //TODO: join to room
                    console.log('join with data: ', data);
                    mode = data.mode;
                    if (mode == 'guest') {
                        //Set hosts video as remote
                        console.log('guest connect host`s remote video' , data.peer);
                    } else if (mode == 'host') {
                        console.log('Host connected. he don`t sets any remote video. He waits till guest connect to him');
                    }
                });
                socket.on('guest_join_room', function (data) {
                    console.log('gjr', mode, data);
                    if (mode == 'host') {
                        //You are host. Set guest`s remote video as main.
                        //If you are guest you ignore this, because you already have your video
                        console.log('host connect guest`s remote video', data.peer);
                    }
                });
                /*
                //TODO: create room model.
                require(['views/app_view','views/room_view', 'models/room_model'], function (appView, RoomView, Room) {
                    var room = new Room({id: roomId});
                    room.fetch({
                        success: function (model, response, options) {
                            console.log('fetched: ', model);
                            var roomView = new RoomView({model: model});
                            appView.render(roomView);

                            // -- start of stream
                            var localVideo = document.getElementById("local-video");
                            var remoteVideo = document.getElementById("remote-video");

                            var localStream = null;
                            var localPeerConnection = null;
                            var remotePeerConnection = null;

                            var servers = null;

                            var constraints = {video: true};
                            function successCallback(stream) {
                                localStream = stream;
                                localVideo.src = window.URL.createObjectURL(stream);
                                localVideo.play();

                                localPeerConnection = new RTCPeerConnection(servers);
                                localPeerConnection.onicecandidate = gotLocalIceCandidate;

                                remotePeerConnection = new RTCPeerConnection(servers);
                                remotePeerConnection.onaddstream = gotRemoteStream;
                                remotePeerConnection.onicecandidate = gotRemoteIceCandidate;

                                localPeerConnection.addStream(localStream);
                                localPeerConnection.createOffer(gotLocalDescription, function () {});

                            }
                            function errorCallback(error){
                                console.log("getUserMedia error: ", error);
                            }
                            getUserMedia(constraints, successCallback, errorCallback);



                            function gotRemoteStream (event) {
                                remoteVideo.src = window.URL.createObjectURL(event.stream);
                                remoteVideo.play();
                            }

                            function gotLocalDescription (description) {
                                localPeerConnection.setLocalDescription(description);
                                remotePeerConnection.setRemoteDescription(description);
                                remotePeerConnection.createAnswer(gotRemoteDescription, function () {});
                            }

                            function gotRemoteDescription(description){
                                remotePeerConnection.setLocalDescription(description);
                                localPeerConnection.setRemoteDescription(description);
                            }

                            function gotLocalIceCandidate(event){
                                if (event.candidate) {
                                    remotePeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
                                }
                            }

                            function gotRemoteIceCandidate(event){
                                if (event.candidate) {
                                    localPeerConnection.addIceCandidate(new RTCIceCandidate(event.candidate));
                                }
                            }


                            // -- end of stream

                        },
                        error: function (model, response, options) {
                            console.log('error occurred');
                        }
                    });
                });
                */
            }

        }
        return RoomController;
    }
);
