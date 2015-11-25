module.exports = function(app){
	var Produto = app.models.produtos;
	
	var ProdutoController={
			index: function(req,res){
				Produto.find(function(err,data){
					if(err){
						console.log(err);
					}
					res.render('produtos/index',{lista: data});
					
				});
			},
			
			create: function(req,res){
				res.render("produtos/create");
			},
			insert: function(req,res){
				var model= new Produto({cod:req.body.cod,nome:req.body.nome,descricao:req.body.descricao,preco:req.body.preco});
				model.save(function(err){
					if(err){
						console.log(err);
					} 
					req.flash('inf','cadastrado com sucesso');
					res.redirect('/produtos');
				});
			},
	}
	return ProdutoController;
}