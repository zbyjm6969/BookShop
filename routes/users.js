var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/users',function(req,res){
	res.send('users/users');
});

module.exports = router;
