// data structure array students with objects representing student, name, track, achievemnet, points
// create at least 5 student objects. 
var message;
var name;
var track;
var achievement;
var points;
var students;

var students = [
	{name: 'Ben',
	track: 'JS',
	achievement:'Gold',
	points: 45678  
	},
	{name:'Alex',
	track: 'HTML',
	achievement:'Red',
	points:5234 
	},
	{name:'Nathan',
	track: 'Ruby',
	achievement: 'Double Gold',
	points: 100000000
	},
	{name: 'Rebekah',
	track: 'JS',
	achievement: 'GOLD',
	points: 700098823 
	},
	{name: 'Becky',
	track: 'Swift',
	achievement: 'Double Gold',
	points: 89924095 }
]


for (var i = 0; i < students.length; i += 1) {
  name = students[i].name + ', ';
  track = students[i].track + ', ';
  achievement = students[i].achievement + ', ';
  points = students[i].points;
  message += message + name + track + achievement + points;

}

document.write(message);
