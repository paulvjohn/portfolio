var io = require('socket.io-client');
var socket = io();

var WebSocketsMixin = {

  /*
   * Provide the global io connection to stores if
   * they need more granular control.
   */
  io: io,

  /*
   * Provide the socket connection to stores if
   * they need more granular control.
   */
  socket: socket,

  /*
   * Shorthand for emitting a websocket event.
   */
  emit: function (message, data, callback) {
    callback = callback || function () { console.log('[WebSocketsMixin] Callback returned with:', arguments); };
    this.socket.emit(message, data, callback);
  },

  on: function (message, callback) {
    this.socket.on(message, callback);
  },
};

module.exports = WebSocketsMixin;
