var upper = 10000;
var randNumb = randomNumber(upper);
var guess; 
var attempts = 0;

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randNumb) {
	guess = randomNumber(upper);
	attempts +=1;
} 
document.write("<p>The random number was: " + randNumb + "</p>");
document.write("<p>It took the computer " + attempts + " to get it right.</p>");