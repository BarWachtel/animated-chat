var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/simple');

var userSchema = {
  username:String,
  password:String,
  screenname:String
}

var User = mongoose.model('User', userSchema, 'users');

var app = express();

app.get('/', function(req, res) {
  User.find(function (err, user) {
    res.send(user);
  })
});

app.listen(8080);
