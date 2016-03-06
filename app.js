var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   console.log("-----")
   console.log( __dirname)
   res.sendFile( __dirname + "/" + "index.html" );
   console.log("-----Send")
})

app.get('/css/main.css', function (req, res) {
   res.sendFile( __dirname + "/" + "css/main.css" );
})

app.get('/js/main.js', function (req, res) {
   res.sendFile( __dirname + "/" + "js/main.js" );
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
