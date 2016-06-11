var QuizUI = 
{
	displayNext: function() {

		if (quiz.hasEnded()) 
		{
			this.displayScore();
		} 

		else {
			this.displayQuestion();

			this.displayChoices();

			this.displayProgress();
		}
	},


	displayQuestion: function() 
	{
		this.populateIdWithHTML
		(
			"questions",
			quiz.getCurrentQuestion().text
		);
	},


	displayChoices: function() 
	{
		var choices = 
			quiz.getCurrentQuestion().choices;

			for (var i = 0; i < choices.length; i++) 
			{
				this.populateIdWithHTML
				(
					"choice" + 1, choices[i]
				);
			}, 
	},


	displayScore: function() 
	{
		var gameOverHTML = "<h1>Game Over</h1>";

		gameOverHTML += "<h2>Your score is: "
			+ quiz.score + "</h2>";

		this.populateIdWithHTML("quiz", gameOverHTML);
	},


	populateIdWithHTML: function(id, element)
	{
		var element = document.getElementById(id);
		element.innerHTML = text; 
	}, 

	quessHandler: function(id, guess) {
		var button = document.getElementById(id);
		button.onclick = function(){
			quiz.guess(guess);
			QuizUI.displayNext();
		}
	}, 














}