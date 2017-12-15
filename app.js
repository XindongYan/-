
var express = require('express');
var app = express();
app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendfile('./templates/index.html')
});

app.get('/Exp_1', function (req, res) {
    res.sendfile('./templates/Exp_1.html')
})

app.get('/Exp_2', function(req, res) {
    res.sendfile('./templates/Exp_2.html')
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});