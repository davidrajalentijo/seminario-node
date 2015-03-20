var express = require("express"),
app = express(),
http = require("http"),
server = http.createServer(app),
mongoose = require('mongoose');

app.configure(function (){
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
app.engine("jade", require("jade").__express);
app.set("views", "./views");
app.set("view engine", "jade");
});

app.get('/', function(req, res){
	res.render("index", {title : "Seminario: Express, Node js y RestFul WS"});
	//res.send("Hello World!");
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

//server.listen(5000, function(){
//	console.log("Node server running on http://localhost:5000");
//});

app.listen(5000)