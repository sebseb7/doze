#!/usr/local/bin/node

process.on('uncaughtException', function (err) {

	console.log('uncaught exception: '+ err)
	console.log(err.stack);

});

