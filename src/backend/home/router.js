var _ = require('lodash-node');
function Router(io, socket) {

  this.read = function (callback) {
    callback(null, true);
  };
}

module.exports = function (io, socket) {
  console.log('[HomeRouter] Init router');
  var router = new Router(io, socket);
  socket.on('Home:read', router.read);
};
