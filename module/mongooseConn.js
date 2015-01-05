var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/book');


module.exports = mongoose;