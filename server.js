var express  = require('express');
var mongoose = require('mongoose');

var database = require('./database/config');
var app = express();

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));

var port = 5000;
app.listen(port);

console.log("App listening on port " + port);
