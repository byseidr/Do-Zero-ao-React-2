// OBJETOS COM MÉTODOS --------------------------------------------------------

// Exemplo 1 - Objetos com funções (métodos)
var calculadora = {
    somar(a, b) {
        return a + b;
    },
    subtrair(a, b) {
        return a - b;
    },
};

console.log(calculadora.somar(5, 3)); // Saída: 8
console.log(calculadora.subtrair(5, 3)); // Saída: 2

// Exemplo 2 - Utilizando auto-referência com a palavra-chave "this"
var pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
};

// Chamando o método
pessoa.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.

// Exemplo 3 - Versão mais curta no ES6
var pessoa = {
    nome: "João",
    idade: 30,
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
};

pessoa.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.


// PROPRIEDADES E MÉTODOS EMBUTIDOS -------------------------------------------

// Exemplo 1 - A propriedade length de uma string
var nome = "João";
console.log(nome.length);  // 4 (tamanho da string "João")

// Exemplo 2 - A propriedade length de um array
var frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length);  // 3 (número de elementos no array)

// Exemplo 3 - O método toString() de um número
var numero = 123;
console.log(numero.toString());  // "123"

// Exemplo 4 - O método toString() de um array
var frutas = ["maçã", "banana", "laranja"];
console.log(frutas.toString());  // "maçã,banana,laranja"

// Exemplo 5 - O método toLowerCase() de uma string
var frase = "JavaScript é MUITO legal!";
console.log(frase.toLowerCase());  // "javascript é muito legal!"

// Exemplo 6 - O método toUpperCase() de uma string
var frase = "JavaScript é MUITO legal!";
console.log(frase.toUpperCase());  // "JAVASCRIPT É MUITO LEGAL!"
