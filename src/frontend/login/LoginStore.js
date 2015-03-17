var _ = require('lodash');
var cookie = require('cookie');
var crypto = require('crypto');
var Reflux = require('reflux');
var io = require('socket.io-client');
var socket = io();
var console = require('console-browserify');

var state = {
  initialized: false,
  loggedIn: false,
  username: '',
  displayName: '',
  role: '',
  userEvents: {},
  errorMessage: ''
};

var SessionStore = Reflux.createStore({
  listenables: [require('./LoginActions')],

  init: function () {
    console.log('[SessionStore] Initialize login store.');

    socket.emit(
      'session active', function (err, session) {
        if (err) {
          console.log('[SessionStore] Session not active:', err);
          this.setState({
            loggedIn: false,
            errorMessage: err.message,
            username: '',
            role: '',
            userEvents: {}
          });
          return;
        }

        this.setState({
          loggedIn: true,
          errorMessage: '',
          username: session.username,
          displayName: session.displayName,
          role: session.role,
          userEvents: JSON.parse(session.userEvents)
        });

      }.bind(this)
    );

  },

  getInitialState: function () {
    return state;
  },

  setState: function (newState) {
    _.merge(state, newState, {
      initialized: true
    });
    this.trigger(state);
  },

  receivedSalt: function (salt) {
    var hash;

    console.log('[LoginStore] got salt:', salt);

    // Hash the password locally, using the salt returned by the API
    hash = crypto.createHash('sha256').update(salt + this.password).digest('base64');

    // Attempt to login using the email address and computed hash
    socket.emit(
      'login',
      {
        username: this.username,
        password: hash
      },
      this.receivedLoginResponse.bind(this)
    );
  },

  receivedLoginResponse: function (success, userDetails) {
    // Failed to login.
    if (!success) {
      console.log('[LoginStore] Login failed for user:', this.username);
      this.setState({
        loggedIn: false,
        errorMessage: 'Your username or password are invalid',
        username: '',
        role: '',
        userEvents: {}
      });
    } else {
      console.log('[LoginStore] Logged in user:', userDetails);

      // Set last login
      if (userDetails.userId) {
        userDetails.id = userDetails.userId; // Need this for it to work!
        console.log('[LoginStore] Socket to update login');
        socket.emit(
          'user:updateLastLogin',
          userDetails,
          this.updatedLastLogin.bind(this)
        );
      }

      this.setState({
        loggedIn: true,
        errorMessage: '',
        username: userDetails.emailAddress,
        displayName: userDetails.displayName,
        role: userDetails.role,
        userEvents: JSON.parse(userDetails.userEvents)
      });

      document.cookie = "sessionId=" + userDetails.token;
    }
    this.username = null;
    this.password = null;
  },

  updatedLastLogin: function (success, userDetails) {},

  onLogin: function (username, password) {
    console.log('[LoginStore] Logging in with:', username);

    this.username = username;
    this.password = password;

    socket.emit(
      'get salt',
      username,
      this.receivedSalt.bind(this)
    );
  },

  onLogout: function () {
    console.log('[SessionStore] Logging out');

    var cookies = cookie.parse(document.cookie),
      token = cookies.sessionId;

    document.cookie = 'sessionId=';

    socket.emit(
      'logout', function (err, message) {
        // Failed to logout.
        if (err) {
          this.setState({
            loggedIn: true,
            errorMessage: err
          });
          return;
        }

        console.log('[SessionStore] Logged out successfully');
        this.setState({
          loggedIn: false,
          errorMessage: '',
          username: '',
          role: '',
          userEvents: {}
        });
      }.bind(this)
    );
  }
});

module.exports = SessionStore;
