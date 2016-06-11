var questions = 
	[
		new Question("Who was the first U.S. president?", 
			[
				"G. Washington",
				"T. Jefferson"
			],
			"G. Washington"
			)

		new Question("What is the meaning of life?",
			[
				"Pi",
				"42"
			],
			"42"
			)
	];

//Create Quiz 
var quiz = new Quiz(questions);

//Display quiz
QuizUI.displayNext();