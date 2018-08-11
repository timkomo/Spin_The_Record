require('dotenv').config();


var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var path = require('path');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();

// Connect to the public directory to access public files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//Setting view engine for handlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import and use router from controller.js file
var router = require('./controllers/records_controller');
app.use('/', router);


// Set Port and set server to listen 
var PORT = 8080;
app.listen(process.env.PORT || PORT);
console.log("Local host:" + PORT);