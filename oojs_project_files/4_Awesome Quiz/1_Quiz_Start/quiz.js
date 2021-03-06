function.Quiz(questions) {
	this.score = 0
	this.questions = questions;
	this.currentQuestionsIndex = 0;
}

Quiz.prototype.guess = function(answer) {
	if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
		this.score++;
	}
	this.currentQuestionsIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
	return this.questions(this.currentQuestionsIndex)
};

Quiz.protoype.hasEnded = function() {
	return this.currentQuestionsIndex >= this.questions.length;
}