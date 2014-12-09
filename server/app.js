var express = require('express');
var http = require('http');
var socket = require('socket.io');
// var mongoose = require('mongoose');

var app = express();
var server = http.createServer(app);
var io = socket.listen(server);
var port_number = 8080;

// mongoose.connect('mongodb://localhost/simple');
//
// var userSchema = {
//   username:String,
//   password:String,
//   screenname:String
// }
//
// var User = mongoose.model('User', userSchema, 'users');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  console.log('serving file /home.html');
  res.sendFile('/home.html');
});

io.on('connection', function(socket) {
  console.log('User connected yay!');

  socket.on('clientMessage', function(data){
    console.log('New message from ' + data.name);
    console.log(data.msg);
    io.sockets.emit('clientMessage', data);
  });
});


// socket.io client failed to connect when using 'app.listen(port)'
server.listen(port_number);
// module.exports = app;
