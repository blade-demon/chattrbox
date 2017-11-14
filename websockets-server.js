var Websocket = require('ws');
var WebSocketServer = Websocket.Server;
var port = 3001;
var ws = new WebSocketServer({ port: port });
console.log('websockets server started.');

ws.on('connection', function(socket) {
    console.log('client connection established');
    socket.on('message received:', function(data) {
        socket.send(data);
    });
});