var express           = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser        = require('body-parser');
var connect           = require('connect');
var methodOverride    = require('method-override');
var route             = require('./controllers/burgers_controller.js');
var app               = express();

const PORT = process.env.NODE_ENV || 8080;

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.urlencoded({extended: false}));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

route.controller(app);













app.listen(PORT, function() {
  console.log('Listening on %s', PORT);
});