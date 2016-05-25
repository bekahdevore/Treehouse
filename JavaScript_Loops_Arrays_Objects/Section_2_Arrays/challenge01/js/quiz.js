var questions = [
	['What is 2+2', '4'],
	['What is the capital of KY?', 'Frankfort'], 
	['How many legs do horses have?', '4'],
	['What is my name?', 'Rebekah']
]
var correct = 0;



for ( var i = 0; i < questions.length; i += 1){
	var ask = prompt(questions[i][0]);
	if (prompt ===questions[0][i]) {
		correct += 1;
   	}

} 

print("You answered" + correct + "questions correctly.");

function print(message) {
  document.write(message);
}
