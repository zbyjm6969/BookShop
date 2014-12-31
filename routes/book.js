var express = require('express');
var router = express.Router();
var module_book = require('../module/bookService');


router.get('/', function(req, res) {
	//module_book.getBookByID(1);
	res.render('book/list',{"title":"Book","book_list":module_book.getAllBooks()});
});

router.get('/:id',function(req,res){
	res.end('this is book detail page');
});

module.exports = router;
