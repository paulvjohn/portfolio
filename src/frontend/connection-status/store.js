var Reflux = require('reflux');
var io = require('socket.io-client');
var socket = io();
//var socket = io.connect();

var CONNECTED = 'connected';
var DISCONNECTED = 'disconnected';

var ConnectionStatusStore = Reflux.createStore({

  init: function () {
    console.log('[ConnectionStatusStore] Initialize connection status store.');

    // Listen for status changes.
    socket.on('connect', this.updateConnectionStatus.bind(this));
    socket.on('disconnect', this.updateConnectionStatus.bind(this));
  },

  updateConnectionStatus: function () {
    this.updateStatus(socket.connected);
  },

  updateStatus: function (connected) {
    console.log('[ConnectionStatusStore] Connected to WebSockets server:', connected);
    this.status = connected ? CONNECTED : DISCONNECTED;

    console.log('[ConnectionStatusStore] Status:', this.status);
    this.trigger(this.status);
  },

  getInitialState: function () {
    this.status = this.status || DISCONNECTED;
    return this.status;
  }
});

module.exports = ConnectionStatusStore;
