var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.end('this is books list page');
});

router.get('/:id',function(req,res){
	res.end('this is book detail page');
});

module.exports = router;
