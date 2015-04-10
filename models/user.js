var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var userSchema = new Schema({
	username : { type : String},
	contraseña : {type : String},
    nombre : {type : String},
    correo : {type : String}


});
//permitimos que sea llamado desde el archivo principal de la aplicación
module.exports = mongoose.model('User', userSchema);