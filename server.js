var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
fs = require('fs');

//MongoDB connction string
var mongoUri = 'mongodb://localhost:27017';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});


//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Import folder path
require('./app/models/musician');
require('./app/routes/routes')(app);

//Server port listner
app.listen(3005);
console.log("Jammin\' on port 3005...");


// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(3005, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })


// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello New York\n');
// }).listen(3005);
// console.log('Server running at http://localhost:3005/');


// var express = require('express');
// var app = express();
// app.get('/musician/:name', function(req, res) {

//    // Get /musician/{{name}}
//    console.log(req.params.name)
//    // => {{name}}
//    var data = {
//    	id: 1,
//    	name: req.params.name
//    }
//    res.send(data	);
// });
// app.listen(3005);
// console.log('Listening on port 3005...');