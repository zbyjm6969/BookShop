var mongoose = require('./mongooseConn'); 


var bookService = function(){
	var bookSchema = mongoose.Schema({book_name:String,author:String});

	bookSchema.statics.findByAuthor = function(author,cb){
		console.log(author);
		//this.find({"author":this.author},cb);
		cb("",{ "_id" : "ObjectId(\"54a2508ce47f367beb80ca5b\")", "author" : "Allen", "book_name" : "book1" });
	}

	

	this.getBookByAuthor = function(author,cb){
		var model_book = mongoose.model('books', bookSchema);
		model_book.findByAuthor(author, function (err, animals) {
			console.log(animals);
		});
	}
}


module.exports = new bookService();