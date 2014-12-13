/*
Handle client login screen logic
Sending login request information in the following manners:
  1. Username/Password combination
  2. Facebook login - figure this out later

Also need to handle creating a new user account
*/
const serverUrl = 'localhost',
      port = '8080';

var $userLoginForm,
    $usernameField,
    $passwordField,
    $passwordConfirmationField,
    $loginButton,
    $facebookLoginButton,
    $createAccountButton;




jQuery(function($) {
  //Initialize variables onload
  // socket = io('ws://localhost:8080');

  $userLoginForm = $('#userLoginForm');
  $usernameField = $('#usernameField');
  $passwordField = $('#passwordField');
  $passwordConfirmationField = $('#passwordConfirmationField');
  $loginButton = $('#loginButton');
  $facebookLoginButton = $('#facebookLoginButton');
  $createAccountButton = $('#createAccountButton');

  $userLoginForm.submit(userLogin);
});

function userLogin(e) {
  e.preventDefault();

  //Get details to server
  $.ajax({
    type: 'POST',
    xhrFields: {
      withCredentials: true
    },
    data: {
      username: $usernameField.val(),
      password: $passwordField.val()
    },
    url: serverUrl + ':' + port + '/login',
    success: console.log,
    error: console.log
  });
  //withCredentials used for CORS (cross origin resource sharing)

  console.log('Login button pressed!');
  console.log('Ajax request send to URL:' + serverUrl + ':' + port + '/login');
}
