var name = "Filipe";
var age = 27;
var team;
var food = null;
var symbol = Symbol();

// como verificar o tipo da variavel
console.log(typeof name);//string
console.log(typeof age);//number
console.log(typeof team);//undefined
console.log(typeof food);//object
console.log(typeof symbol);//symbol

//concatenar strings
var lastName = "Valadares";
var completeName = name + lastName;
console.log(completeName);