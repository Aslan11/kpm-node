var express = require('express'),
	basicAuth = require('basic-auth');

var app = express();

/* Authorization Middleware
---------------------------------------------------------------------- */
var auth = function (req, res, next) {
	function unauthorized(res) {
		res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
		return res.send(401);
	}
	var user = basicAuth(req);
	if (!user || !user.name || !user.pass) {
		return unauthorized(res);
	}
	if (user.name === 'USERNAME' && user.pass === 'PASSWORD') {
		return next();
	} else {
		return unauthorized(res);
	}
};

/*	Express Settings
---------------------------------------------------------------------- */
//app.use(express.static(__dirname + '/public'));
//app.use(cookieParser());
//app.use(bodyParser());


/*	Routes
---------------------------------------------------------------------- */
//app.all('*', auth);
app.use(express.static(__dirname + '/public'));
app.get('*', function(req, res){
	res.sendfile('public/index.html');
});

app.listen(80);
console.log('kicking ass on port 80');