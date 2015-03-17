// Configure Error logging / monitoring if not in development
var env = process.env.NODE_ENV || 'development';
var path = require('path');
var express = require('express');
var dotenv = require('dotenv');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(compression());
app.use(bodyParser.json());

// Settings
dotenv.load();
var port = Number(process.env.PORT || 2000);

// Logging
var morgan = require('morgan');
app.use(morgan('combined'));

// Serve static assets
app.use(express.static(path.join(__dirname, '../../dist')));

// Handle WebSocket connections.
io.on('connection', function (socket) {

  // Bubble socket errors up to the main node exception handler
  socket.on("error", function (err) {
    throw err;
  });

  console.log('a user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  // Load application routers.
  require('./home/router')(io, socket);
  require('./portfolio/router')(io, socket);

});

// Start server.
server.listen(port, function () {
  console.log('Server starting up on port', port);
});
