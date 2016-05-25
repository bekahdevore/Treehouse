var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += 'I live' + person.county; 
person.name= 'Dash';
mesage += 'But I wish my name was ' +person.name+;
message+= person.skills.join(, );
print(message);