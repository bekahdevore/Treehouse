!function(){
	function foo() {
	console.log('foobar');
};

foo();
}();





!function(underscore){
	underscore.someAwesomeMethod = "yay!!!";
	console.log(underscore.VERSION);
}(_);







var awesomeNewModule = (function(exports){
	var exports = {
		foo: 5,
		bar: 10
	};

	exports.helloMars = function() {
		console.log("Hello Mars!");
	};

	exports.goodbye = function() {
		console.log("Goodbye!");
	};

	return exports
}(awesomeNewModule || {}));







var awesomeNewModule.sub = (function(exports){
	var exports = {
		foo: 5,
		bar: 10
	};

	exports.helloMars = function() {
		console.log("Hello Mars!");
	};

	exports.goodbye = function() {
		console.log("Goodbye!");
	};

	return exports
}(awesomeNewModule.sub || {}));



