var express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  methodOverride = require('method-override');

var app = express();

var dbConnectString = 'mongodb://localhost/mern-todo';

mongoose.connect(dbConnectString);

//import models
require('./data-server-app/models/todo.server.model.js');

//parse json data
app.use(bodyParser.json());
//parse url query parameters
app.use(bodyParser.urlencoded({ extended: true }));
//override REST methods
app.use(methodOverride());

app.get('/', function (req, res) {
  res.write('Hello World');
  res.end();
});

// add routes
require('./data-server-app/routes/todos.server.routes')(app);

var port = 8082;

var server = app.listen(port, function () {

  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});