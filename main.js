var app = require('hello_server').app;



app.listen(8080, function(){
	console.log('server running at 8080');
});

console.log(app.get.toString());
