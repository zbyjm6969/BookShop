var express = require('express');
var router = express.Router();
var module_book = require('../module/bookService');
var EventProxy = require('eventproxy');

router.get('/', function(req, res) {
	var ep = new EventProxy();
	module_book.getBookByID('Allen',function(d){
		res.render('book/list',{"title":"Book","book_list":d});
	});
});

router.get('/:id',function(req,res){
	res.end('this is book detail page');
});

module.exports = router;
