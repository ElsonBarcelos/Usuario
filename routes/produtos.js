module.exports = function(app){
	var produtos = app.controllers.produtos;
	
app.get('/produtos', produtos.index);
app.get('/produtos/create', produtos.create);
app.post('/produtos', produtos.insert);
}
