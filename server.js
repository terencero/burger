var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Set handlebars
var exphbs = require('express-handlebars');

var PORT  = process.env.PORT || 8080;
var app = express();

// Serve/route to static content
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false}));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and the server access to them
var routes = require('./controllers/burger_controller.js');

app.use('/', routes);

app.listen(PORT);

