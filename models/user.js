var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var userSchema = new Schema({
	username : { type : String},
	contraseña : {type : String},
    nombre : {type : String},
    correo : {type : String}


});

module.exports = mongoose.model('User', userSchema);