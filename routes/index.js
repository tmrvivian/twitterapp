var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.get('/users/:name', function(req,res){
	var name = req.params.name;
	var list = tweetBank.find({name:name});
	res.render('index',{title:'Posts by '+name, tweets:list, showForm:true, User:name});

});

router.get('/users/:name/tweets/:id', function(req,res){
	var name = req.params.name;
	var id = req.params.id;
	console.log(name+" "+id);
	var list = tweetBank.find({name:name,id:Number(id)});
	console.log(list);
	res.render('index',{title:'Posts by '+name +' # '+id, tweets:list});

});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'All Posts', tweets: tweets, showForm:true} );
});


router.post('/submit', function(req, res){
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name,text);
	res.redirect('/');
});

module.exports = router;