var express = require( 'express' );
var app = express();
var swig = require('swig');

// app.engine (docs) to use swig.renderFile as the function to actually render html
// app.set (docs) the default view engine to html (so we don't have to specify on every render)
// app.set (docs) the views path to our views folder (where we store our templates)
app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/views');

swig.setDefaults({ cache: false });

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


//Turn off Swig's caching in app.js
app.get('/', function(req, res){
	res.render( 'index', {title: 'Hall of Fame', people: people} );
})


app.listen(3000);