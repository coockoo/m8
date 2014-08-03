/**
 * Created by coockoo on 7/23/14.
 */

define(
    ['io'],
    function (io) {
        function RoomController () {

            this.showRoom = function (roomId) {
                var socket = io.connect();
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
