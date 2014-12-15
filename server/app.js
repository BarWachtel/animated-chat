var express = require('express');
var http = require('http');
var socket = require('socket.io');
var cors = require('cors');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

var app = express();
app.use(express.bodyParser());
app.use(cors());
var server = http.createServer(app);
var io = socket.listen(server);
var port_number = 9000;

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

app.post('/login', function(req, res) {

  console.log(req.param('username'));
  console.log(req.param('password'));

  res.send('Hey ' + req.username + ' thanks for logging on');
});

app.get('/login', function(req, res) {
  res.send('yaya im here');
});

// app.get('/', function(req, res) {
//   console.log('serving file /home.html');
//   res.sendFile('home.html');
// });

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
