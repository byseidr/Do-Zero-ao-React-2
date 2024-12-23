// OPERADORES III -------------------------------------------------------------

// Exemplo 1 - Copiando um array com o operador spread
var frutas = ['maçã', 'banana', 'laranja'];
var frutasCopia = [...frutas]; // Cria uma cópia do array frutas

console.log(frutasCopia); // ['maçã', 'banana', 'laranja']

// Exemplo 2 - Combinando dois arrays com o operador spread
var frutas = ['maçã', 'banana'];
var maisFrutas = ['laranja', 'morango'];

var todasAsFrutas = [...frutas, ...maisFrutas]; // Combina os dois arrays

console.log(todasAsFrutas); // ['maçã', 'banana', 'laranja', 'morango']

// Exemplo 3 - Adicionando elementos a um array com o operador spread
var frutas = ['banana', 'laranja', 'morango'];

var novasFrutas = ['maçã', ...frutas];

console.log(novasFrutas); // ['maçã', 'banana', 'laranja', 'morango']

// Exemplo 4 - Copiando um objeto com o operador spread
var pessoa = { nome: 'João', idade: 25 };
var pessoaCopia = { ...pessoa }; // Cria uma cópia do objeto pessoa

console.log(pessoaCopia); // { nome: 'João', idade: 25 }

// Exemplo 5 - Combinando dois objetos com o operador spread
var pessoa = { nome: 'João', idade: 25 };
var endereco = { rua: 'Rua 1', cidade: 'São Paulo' };

var pessoaComEndereco = { ...pessoa, ...endereco };

console.log(pessoaComEndereco); 
// { nome: 'João', idade: 25, rua: 'Rua 1', cidade: 'São Paulo' }

// Exemplo 6 - Sobrescrevendo propriedades com o operador spread
var pessoa = { nome: 'João', idade: 25 };
var pessoaAtualizada = { ...pessoa, idade: 26 }; // Sobrescreve a idade

console.log(pessoaAtualizada); // { nome: 'João', idade: 26 }

// Exemplo 7 - Agrupando argumentos de função com o operador rest
function somarTudo(...numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);
}

console.log(somarTudo(1, 2, 3)); // 6
console.log(somarTudo(10, 20, 30, 40)); // 100

// Exemplo 8 - Agrupando resto dos elementos de um array com o operador rest
var numeros = [1, 2, 3, 4, 5];

var [primeiro, segundo, ...resto] = numeros;
console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]

// Exemplo 9 - Agrupando resto dos elementos de um objeto com o operador rest
var pessoa = { nome: 'João', idade: 30, cidade: 'São Paulo' };

var { nome, ...resto } = pessoa;
console.log(nome); // João
console.log(resto); // { idade: 30, cidade: 'São Paulo' }
