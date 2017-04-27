var array =["Value1","Value2","Value3"];


var myDiv = getElementbyId('MyDiv'); 
	array.forEach(function (value){
		var button = document.createElement('MyDiv');
		button.innerText = value; 
		button.addEventListener('click', function(){
			console.log(value);
		});
		myDiv.appendChild(button);
	})