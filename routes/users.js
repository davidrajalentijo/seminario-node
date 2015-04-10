//permitimos que sea llamado desde el archivo principal de la aplicacion
module.exports = function(app) {
//le indicamos el esquema de la base de datos
  var User = require('../models/user.js');

  //GET - Devuelve todos los usuarios
  findAllUsers = function(req, res) {
    //con las funciones find() y findbyid() podemos buscar en la base de datos a partir de un modelo
  	User.find(function(err, users) {
  		if(!err) {
        console.log('GET /users') 

        res.render("coleccionusuarios", { title: 'Lista de Usuarios',users: users});
  			//res.send(users); //nos enviaria el JSON
        
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Devuelve un usuario pasandole su id
    findById = function(req, res) {
  	User.findById(req.params.id, function(err, users) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
        res.render("usuario", { title: 'Datos de Usuario',users: users});
  			res.send(users);
         //res.render("usuario", { title: 'Datos de Usuario',users: users});
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Inserta un nuevo usuario en la BD
  addUser = function(req, res) {
  	console.log('POST');
    console.log(req.body);
  	console.log(req.body);
    
     //res.render("prueba", { title: req});
//recogemos los valores de la petición
  	var user = new User({
  		username:  req.body.username,
  		contraseña:  req.body.contraseña,
  		nombre:  req.body.nombre,
  		correo:  req.body.correo  
  	});
//lo guardamos en la base de datos
  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(user);
  };

  //PUT - Actualiza los datos de un usuario
  updateUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
  		username:    req.body.username;
      contraseña:     req.body.contraseña;
      nombre:  req.body.nombre;
      correo:   req.body.correo;  
//guardamos en la base de datos
  		user.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  //DELETE - Elimina un usuario
  deleteUser = function(req, res) {
  	TVShow.findById(req.params.id, function(err, user) {
      //borramos en la base de datos
  		user.remove(function(err) {
  			if(!err) {
  				console.log('Removed');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  		})
  	});
  }

  //Link routes and functions
  app.get('/users', findAllUsers);
  app.get('/user/:id', findById);
  app.post('/user', addUser);
  app.put('/user/:id', updateUser);
  app.delete('/user/:id', deleteUser);

}