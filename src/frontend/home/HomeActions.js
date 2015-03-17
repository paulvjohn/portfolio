var Reflux = require('reflux');

var HomeActions = Reflux.createActions([
  'getTime',
  'getThought'
]);

module.exports = HomeActions;
