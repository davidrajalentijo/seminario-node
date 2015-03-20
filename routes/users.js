module.exports = function(app) {

  var User = require('../models/user.js');

  //GET - Return all tvshows in the DB
  findAllUsers = function(req, res) {
  	User.find(function(err, users) {
  		if(!err) {
        console.log('GET /users')
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	User.findById(req.params.id, function(err, users) {
  		if(!err) {
        console.log('GET /user/' + req.params.id);
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //POST - Insert a new TVShow in the DB
  addUser = function(req, res) {
  	console.log('POST');
  	console.log(req.body);

  	var user = new User({
  		username:    req.body.username,
  		contraseña: 	  req.body.contraseña,
  		nombre:  req.body.nombre,
  		correo:   req.body.correo  
  	});

  	user.save(function(err) {
  		if(!err) {
  			console.log('Created');
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});

  	res.send(user);
  };

  //PUT - Update a register already exists
  updateUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
  		  username:    req.body.username;
      contraseña:     req.body.contraseña;
      nombre:  req.body.nombre;
      correo:   req.body.correo;  

  		tvshow.save(function(err) {
  			if(!err) {
  				console.log('Updated');
  			} else {
  				console.log('ERROR: ' + err);
  			}
  			res.send(user);
  		});
  	});
  }

  //DELETE - Delete a TVShow with specified ID
  deleteUser = function(req, res) {
  	TVShow.findById(req.params.id, function(err, user) {
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