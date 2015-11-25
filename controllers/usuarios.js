module.exports = function(app){
	var Usuario = app.models.usuarios;
	
	var UsuarioController={
			index: function(req,res){
				Usuario.find(function(err,data){
					if(err){
						console.log(err);
					}
					res.render('usuarios/index',{lista: data});
					
				});
			},
			create: function(req,res){
				res.render("usuarios/create");
			},
			insert: function(req,res){
				var model= new Usuario({nome:req.body.nome,email:req.body.email,login:req.body.login,senha:req.body.senha,seat:req.body.seat});
				model.save(function(err){
					if(err){
						console.log(err);
					} 
					req.flash('info','cadastrado com sucesso');
					res.redirect('/usuarios');
				});
			},
			edit: function(req,res){
				Usuario.findById(req.params.id, function(err,data){
					if(err){
						console.log(err);
					}else{
						res.render('usuarios/edit',{value:data});
					}
				});
			},
			update: function(req,res){
				Usuario.findById(req.params.id, function(err,data){
					if(err){
						console.log(err);
					}else{
						var model = data;
						model.nome=req.body.nome;
						model.email=req.body.email;
						model.login=req.body.login;
						model.seat=req.body.seat;
						model.save(function(err){
							if(err){
								console.log(err);
							}
							req.flash('info','Atualizado com sucesso');
							res.redirect('/usuarios');
							
						});
						
						
					}
				});
			},
			show: function(req,res){
				Usuario.findById(req.params.id, function(err,data){
					if(err){
						console.log(err);
					}else{
						res.render('usuarios/show',{value:data});
					}
				});
			},
			remove: function(req,res){
				Usuario.remove({_id:req.params.id},function(err){
					if(err){
						console.log(err);
					}else{
						req.flash('info','Excluido com sucesso');
						res.redirect('/usuarios');
					}
				});
			}
	}
	return UsuarioController;
}