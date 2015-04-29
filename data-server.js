var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.write('Hello World');
  res.end();
});

var port = 8082;

var server = app.listen(port, function () {

  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});