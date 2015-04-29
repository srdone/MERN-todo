var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/', express.static(__dirname + '/public/'));
app.use('/', express.static(__dirname + '/node_modules/'));

var port = 3000;

var server = app.listen(port, function () {

  var address = server.address().address;
  var port = server.address().port;

  console.log('Listening on http://%s:%s', address, port);
});