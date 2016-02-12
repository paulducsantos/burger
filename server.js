var express           = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser        = require('body-parser');
var mysql             = require('mysql');
var connect           = require('connect');
var methodOverride    = require('method-override');
var app               = express();

const PORT = process.env.NODE_ENV || 8080;

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', expressHandlebars({defaultLayout: 'noteslayout'}));
app.set('view engine', 'handlebars');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burgers_db'
});

app.get('/', function(req, res) {
  res.send('hello');
})














app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});