var express = require("express"),
app = express(),
http = require("http"),
server = http.createServer(app),
mongoose = require('mongoose');

app.configure(function (){
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

});

app.get('/', function(req, res){
	res.send("Hello World!");
});

routes = require('./routes/users')(app);

mongoose.connect('mongodb://localhost/usuarios', function(err, res){
	if(err){
		console.log('ERROR: connecting to database.' + err);
	}
	else{
		console.log('Connected to Database');
	}
});

server.listen(5000, function(){
	console.log("Node server running on http://localhost:5000");
});