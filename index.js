// set up ========================================
var express = require('express');
var app = express();                              // create the express app
var port = process.env.PORT || 8080;              // set the port
var bodyParser = require('body-parser');

// routes =========================================
var routes = require('./lib/routers/indexRouter');

// configuration =================================

app.use(express.static(__dirname+'/public'));     // set the static files location
app.use(bodyParser.urlencoded({extended: true})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                       // parse application/json
app.use('/', routes);


// listen (start the app)==========================
var server = app.listen(port);
console.log("App listening on port: "+ port);