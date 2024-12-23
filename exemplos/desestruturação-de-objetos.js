// DESESTRUTURAÇÃO DE OBJETOS -------------------------------------------------

// Exemplo 1 - Antes da desestruturação existir
var pessoa = { nome: "Ana", idade: 25 };

// Extração manual
var nome = pessoa.nome;
var idade = pessoa.idade;

console.log(nome, idade); // Ana, 25

// Exemplo 2 - Utilizando a desestruturação
var pessoa = { nome: "Ana", idade: 25 };

var { nome, idade } = pessoa;

console.log(nome, idade); // Ana, 25
