// const myHeading = document.getElementsByTagName('h1')[0];
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// myButton.addEventListener('click', () => {
// 	myHeading.style.color = myTextInput.value;
// });

// myHeading.addEventListener('click', () => {
// 	myHeading.style.color = 'black';
// })

const myList = document.getElementsByTagName('li');
const errorNotPurple = document.querySelectorAll('.error-not-purple');
const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < myList.length; i += 1) {
	myList[i].style.color = 'purple';
}


for (let i = 0; i < errorNotPurple.length; i += 1) {
	errorNotPurple[i].style.color = 'red';
}

for (let i = 0; i < evens.length; i += 1) {
	evens[i].style.backgroundColor = 'lightgray';
}