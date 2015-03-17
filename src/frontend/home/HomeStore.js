var Reflux = require('reflux');
var io = require('socket.io-client');
var socket = io();
var crypto = require('crypto');
var uuid = require('uuid');
var HomeActions = require('./HomeActions');

var HomeStore = Reflux.createStore({
  listenables: [HomeActions],

  init() {
    console.log('[UserFormStore] Initialize user form store');
    this.setData();
    this.refreshTime();
  },

  getInitialState() {
    return this.homeData;
  },

  setData() {
    this.homeData = {
      updated: false,
      currentTime: new Date()
    };
  },

  refreshTime() {
    setTimeout(() => {
      this.homeData.updated = true;
      this.homeData.currentTime = new Date();
      this.trigger(this.homeData);
    }, 1000);
  },

  onGetTime() {
    this.homeData.updated = false;
    this.trigger(this.homeData);
    this.refreshTime();
  }

});

module.exports = HomeStore;
