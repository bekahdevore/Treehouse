//Problem :Simple way to look at a users badge count and JS points
//Solution: Use node to connect to Treehouse API to get profile information to print out

var http = require("http"); 
var username = "bekahcd"


function printMessage(username, badgeCount, points) {     
	var message = username + " has " + badgeCount + 
			" total badge(s) and " + points +
			" points in JavaScript";    
	console.log(message); } 

//Connect to API url (http://teamtreehouse.com/username.json) 
var request = http.get("http://teamtreehouse.com/" + username + "json", function (response){
		console.log(response.statusCode);
	var body =  "";
	//Read data
	response.on('data', function (chunk) {
		console.log(body += chunk);
	});
	response.on('end', function(){
		console.log(body);
		console.log(typeOf body);
	})
	//Parse data
	//Print data
});



	

	// request.on("error", function(error){
	// console.error(error.message);
	// });


