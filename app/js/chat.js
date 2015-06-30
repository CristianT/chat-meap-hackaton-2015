//$(function(){

	var id = Number(2015);
	
	// connect to the socket
	var socket = io();
	
	socket.on('connect', function()
	{
		console.log('client connection');
		socket.emit('load', id);
	});

	socket.connect();
//});