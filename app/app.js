//var app = require('./configs/expressConfig')();
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

load('routes')
.then('models')
.then('infra')
.into(app);

app.listen(process.env.PORT || 8080, function() {
	console.log("Ta saindo da jaula o Monstro");
});
