var express = require('express');
var router = express.Router();

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

module.exports = router;
