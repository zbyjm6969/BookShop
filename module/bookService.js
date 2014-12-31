var mongoose = require('mongoose'); 


function bookService(){
	var BookSchema = mongoose.Schema({
		book_name:String,
		author:String
	});
	BookSchema.statics.findByAuthor = function(author_name,cb){
		this.find({"author":author_name},cb);
	}

	this.getAllBooks = function(){
		var o = {};
		for (var i = 0; i < 10; i++) {
			o[i] = {"book_title" : "title_"+i};
		};
		return o;
	}

	this.getBookByID = function(book_id,callback){
		var db = mongoose.createConnection('localhost','book');
		db.on('error',console.error.bind(console,'连接错误:'));
		db.once('open',function(){
			//一次打开记录
			console.log("open db connection");
			var books = db.model('books',BookSchema);

			books.findByAuthor("Allen1", function(err, d) {
				callback(d)
			});
		});
	}
}

module.exports = new bookService();