// Tipos de variáveis:(evita repetação)
// var, let, const
//case sensitive
//pode começar com $ _ ou letras
//camelCase

var nome = "Filipe";
var idade = 27;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco)

// para não precisar de colocar var toda hora, final sempre fechar com ";"

var sobrenome = "Valadares",
     cidade = "Sete Lagoas";

console.log(sobrenome, cidade);  

/*
Hoisting:
todas as variáveis são movidas no inicio do código, mas só serão atribuidas
quando forem utilizadas.
*/

//var e let podem ser modificados no decorrer do código já o const, n  