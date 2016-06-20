//Problem: Simple way to look at users badge count and javascript points from a web-browser
//Solution: Use Node for profile look ups and server our template via HTTP

//1. Create a web server

//2. Handle HTTP route GET / and POST /i.e. HOME
	//if url === "/" && GET
		//show search
	//if url == "/" && POST
		//redirect to /:username

//3. Handle HTTP route GET / username i.e. /chalkers
	//if url == "/......"
		//get json from treehouse
			//on "end"
				//show profile
			//on "error"
				//show error

//4. Function that handles reading of files and merge in value
	//read from file and get a string
		//merge values in to string
