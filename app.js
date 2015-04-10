//importamos express
var express = require("express"),
app = express(),
//creamos el servidor
http = require("http"),
server = http.createServer(app),
//importamos mongodb
mongoose = require('mongoose');
//configuramos la aplicación para que pueda realizar métodos REST
app.configure(function (){
	//permitimos que pueda parsear JSON
app.use(express.bodyParser());
//nos permite implementar métodos http
app.use(express.methodOverride());
//Nos permite crear rutas personalizadas
app.use(app.router);
//nos permite utilizar jade
app.engine("jade", require("jade").__express);
app.set("views", "./views");
app.set("view engine", "jade");
});
//en el localhost puerto 5000 enviamos datos para la web
app.get('/', function(req, res){
	res.render("index", {title : "Seminario: Express, Node js y RestFul WS"});
	//res.send("Hello World!");
});
//enlazamos nuestra api
routes = require('./routes/users')(app);
//conectamos con la base de datos
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


//servidor escuchando en el puerto 5000
app.listen(5000)