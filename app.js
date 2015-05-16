var express = require( 'express' );
var app = express();
var swig = require('swig');
var routes = require('./routes/');

// app.engine (docs) to use swig.renderFile as the function to actually render html
// app.set (docs) the default view engine to html (so we don't have to specify on every render)
// app.set (docs) the views path to our views folder (where we store our templates)
app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/views');

swig.setDefaults({ cache: false });

//The express.static() method takes a root directory parameter and returns a middleware function. Like with Morgan, we pass this middleware to app.use() to intercept all requests. It checks if a request URI path matches a filepath in the public directory; if so, it sends that file back as-is
app.use(express.static(__dirname + '/public'));

app.use('/',routes);




app.listen(3000);