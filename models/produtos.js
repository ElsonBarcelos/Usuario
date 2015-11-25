module.exports= function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var produto = new Schema({
		cod: String,
		nome: String,
		descricao: String,
		preco: String
	});
	return mongoose.model('Produtos',produto);
	
}
