var playList = [
['I did it my way', 'Frank Sinatra' ],
['Respect', 'Aretha Frankin'], 
['Imagine', 'John Lennon'],
['Born to Run', 'Bruce Springsteen'], 
['Louie Louie', 'The Kingsmen'], 
['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs (songs) {
	var listHTML = '<ol>';
	for(var i = 0; i<list.length; i+=1){
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

printSongs(songs);
