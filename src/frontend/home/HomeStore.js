var Reflux = require('reflux');
var io = require('socket.io-client');
var socket = io();
var crypto = require('crypto');
var Faker = require('Faker');
var HomeActions = require('./HomeActions');

var HomeStore = Reflux.createStore({
  listenables: [HomeActions],

  init() {
    console.log('[UserFormStore] Initialize user form store');
    this.setData();
    this.refreshTime();
    this.getRandomThought();
  },

  getInitialState() {
    return this.homeData;
  },

  setData() {
    this.homeData = {
      updatedTime: false,
      currentTime: new Date(),
      updatedThought: false,
      thought: this.getThoughts()[this.getRandomNumber()]
    };
  },

  refreshTime() {
    setTimeout(() => {
      this.homeData.updatedTime = true;
      this.homeData.currentTime = new Date();
      this.trigger(this.homeData);
    }, 1000);
  },

  onGetTime() {
    this.homeData.updatedTime = false;
    this.trigger(this.homeData);
    this.refreshTime();
  },

  onGetThought() {
    this.homeData.updatedThought = false;
    this.trigger(this.homeData);
    this.getRandomThought();
  },

  getRandomThought() {
    setTimeout(() => {

      this.homeData.thought = this.getThoughts()[this.getRandomNumber()];
      this.homeData.updatedThought = true;
      this.trigger(this.homeData);
    }, 5000);
  },

  getRandomNumber() {
    return Faker.random.number({
      min: 0,
      max: 7
    });
  },

  getThoughts() {
    return [
      'Reliable.  We get it, your team is busy.  With adding us to your team, you get an extension of your team that can execute your plan and help you achieve your businesses milestones.',
      'An extension of your technology team.',
      'A team of A-player developers living in the North Bay specializing in modern front-end Javascript websites with full-stack solutions using cutting-edge frameworks.',
      'An Agile team utilizing Scrum methodology in a Continuous Integration environment.  We believe projects should be prioritized and released to your customers often while following the cycles of development.',
      '"A" PLAYERS TO EXTEND YOUR TEAM',
      'Urbaitel Enterprises.  We were founded in 2014 as a direct effort to focus entirely on the web development process.',
      'Organized.  Plan, Code, Build, Test & Release.  Process & Automation is the central focus employed consulting with clients in the design, solar, manufacturing & ticketing industries.',
      'Experienced, professional and ready to take on your next project.'
    ];
  }

});

module.exports = HomeStore;
