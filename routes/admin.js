var express = require('express');
var bookService = require('../module/bookService');
var router = express.Router();
var EventProxy = require('eventproxy');

/* GET home page. */
router.get('/', function(req, res) {
	res.end('this is admin page');
  //res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
	res.render('admin/login',{'title':'admin login'});
	//res.end('this is admin login page');
});

router.post('/login',function(req,res){
	var post_data = req.body;
	if(post_data.user_name == 'zbin' && post_data.password == 'allen'){
		res.end('success');
	}
	res.render('admin/login',{'msg':'fail to login'});
});

// manage book,show book list
router.get('/manageBooks',function(req, res) {
	var eq = new EventProxy();
	eq.all("query",function(data) {
		//todo render page ...
		console.log("here"+data);
	});
	bookService.getBookByAuthor("Allen",function(err, d) {
		eq.emit("query",d);
	});
	res.end('this');
});
module.exports = router;
