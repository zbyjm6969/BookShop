//var bookService = require('../../module/bookService');
var EventProxy = require('eventproxy');


var proxy = new EventProxy();

var cb = function(uat,data){
	console.log(uat);
	console.log(data);
}
proxy.all("uat","data",cb);



proxy.emit('uat', "data");
proxy.emit('data',"ccc");