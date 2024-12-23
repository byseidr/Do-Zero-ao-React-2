// DESESTRUTURAÇÃO DE ARRAYS --------------------------------------------------

// Exemplo 1 - Antes da desestruturação existir
var array = [10, 20, 30];

// Extração manual
var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c); // 10, 20, 30

// Exemplo 2 - Utilizando a desestruturação
var array = [10, 20, 30];

var [a, b, c] = array;

console.log(a, b, c); // 10, 20, 30
