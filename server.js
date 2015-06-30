// Invoke 'strict' JavaScript mode
'use strict';

var socketPort = 2015;
var httpPort = 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io').listen(app.listen(socketPort));
var io = require('socket.io').listen(server);

// Load the 'index' routing file
require('./app/routes/index.server.routes.js')(app, io);
	
//app.listen(httpPort);
server.listen(httpPort);

module.exports = app;
console.log('Server running at http://localhost:3000/');
console.log('Server running at socket port 2015');