var express = require( 'express' );
var app = express();

//joe testing a change to stella's app.js

app.get('/', function(req, res){
	res.send('Hello World');
})

app.get('/stella', function(req, res){
	res.send('Hello Stella!');
})
app.listen(3000);