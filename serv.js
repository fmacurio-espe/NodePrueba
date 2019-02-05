
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.status(200).send('Hello World!');
  });
  app.get('/yes', function (req, res) {
    res.status(200).send('yes res');
  });
  app.get('/no', function (req, res) {
    res.status(204).send('no res');
  });
    
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

