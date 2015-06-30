// Invoke 'strict' JavaScript mode
'use strict';

// Define the routes module' method
module.exports = function(app, io) {
	// Load the 'index' controller
	var index = require('../controllers/index.server.controller');

	// Initialize a new socket.io application, named 'chat'
	var chat = io.on('connection', function (socket) {

		console.log('On connection!');
		
		socket.on('load',function(data){
			console.log(data);
			console.log('Load function called');
			var room = findClientsSocket(io,data);
		});

		socket.on('sendMessage',function(data){
			console.log('SendMessageFunction received');
			console.log(data);
			//var emission = socket.broadcast.emit('receive', data);
			//socket.emit('receive', data);
			socket.broadcast.emit('receive', data);
			socket.emit('receive', data);
			//console.log(emission);
			//socketRoom.emit('receive', data);
		});
		
		socket.on('whatEver', function(data)
		{
			//...
			socket.emit('blaBla', data2);
		});
		
		socket.on('alguienSePira', function(data)
		{
			// leave the room -> No es necesario saber qué cliente porque el servidor trata en la variable 'socket' a cada uno por separado en una ejecución diferente
			socket.leave(socket.room);
		});
		
	});

	function findClientsSocket(io,roomId, namespace) {
		var res = [],
			ns = io.of(namespace ||"/");    // the default namespace is "/"

		if (ns) {
			for (var id in ns.connected) {
				if(roomId) {
					var index = ns.connected[id].rooms.indexOf(roomId) ;
					if(index !== -1) {
						res.push(ns.connected[id]);
					}
				}
				else {
					res.push(ns.connected[id]);
				}
			}
		}
		return res;
	};

	// Mount the 'index' controller's 'render' method
	//var func = app.get('/', index.callbacks);

	app.get('/', function(request, response){
	    response.sendfile('Home.html');
	});

};