
/**
 * Module dependencies.
 */

var express = require('express')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  , load = require('express-load')
  , flash = require('express-flash');

var mongoose= require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/snackcar",function(err){
	if(err){
		console.log('erro' + err);
	}
});


// all environments
//app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('Usuario'));
app.use(express.session({cookie:{maxAge:60000}}));
app.use(flash());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
//app.get('/users', user.list);

//modulo para gerenciar a aplicação em MVC
load('models').then('controllers').then('routes').into(app);

app.listen(3000,function(){
	console.log('rodando...');
});
