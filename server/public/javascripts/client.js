var $chat ;
var $messageBox;
var $messageForm;
var username;
var socket;

jQuery(function($) {
  //Initialize variables onload
  socket = io('ws://localhost:8080');
  username = 'bazza'
  $messageForm = $('#send-message');
  $messageBox = $('#message');
  $chat = $('#chat');

  $messageForm.submit(messageSubmit);
  socket.on('clientMessage', messageRecieved)
});

function messageSubmit(e) {
  e.preventDefault();
  socket.emit('clientMessage',
  { name: username, msg: $messageBox.val() });
  console.log('sending message ' + $messageBox.val() );
  $messageBox.val('');
}

function messageRecieved(data) {
  $chat.prepend(getTimeStamp() + ' ' + data.name + ' - ' + data.msg + '<br/>');

  // $chat.prepend($(document.createElement('p'))
  // .text(getTimeStamp() + ' ' + data.name + ' - ' + data.msg));
}

function getTimeStamp() {
  var timeStamp = '';
  var date = new Date;
  timeStamp += date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  return timeStamp;
}

// $messageForm.submit(function(e) {
//   e.preventDefault();
//   socket.emit('clientMessage',
//   { name: username, msg: $messageBox.val() });
//   console.log('sending message ' + $messageBox.val() );
//   $messageBox.val('');
// });
