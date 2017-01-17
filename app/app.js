var app = require('./configs/expressConfig')();

app.listen(process.env.PORT || 8080, function() {
	console.log("Ta saindo da jaula o Monstro");
});
