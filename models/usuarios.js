module.exports= function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var usuario = new Schema({
		nome: String,
		email: String,
		login: String,
		senha: String,
		seat: String,
		data_cad: {type:Date,default:Date.now}
	});
	return mongoose.model('Usuarios',usuario);
	
}

