// MANIPULAÇÃO DE ARRAYS ------------------------------------------------------

// Exemplo 1 - Adicionando elementos
// push: Adiciona um ou mais elementos ao final do array
var numeros = [1, 2, 3];
numeros.push(4); // Adiciona o número 4
console.log(numeros); // [1, 2, 3, 4]

// Exemplo 2 - Removendo elementos
// pop: Remove o último elemento do array e retorna ele
var frutas = ["maçã", "banana", "laranja"];
var ultimaFruta = frutas.pop(); // Remove "laranja"
console.log(frutas); // ["maçã", "banana"]
console.log(ultimaFruta); // "laranja"

// Exemplo 3 - Transformando elementos
// map: Cria um novo array com os resultados da função aplicada a cada elemento
var numeros = [1, 2, 3, 4];
var dobrados = numeros.map((numero) => numero * 2); // Multiplica cada número por 2
console.log(dobrados); // [2, 4, 6, 8]

// Exemplo 4 - Filtrando elementos
// filter: Cria um novo array apenas com os elementos que passam em um teste
var numeros = [10, 15, 20, 25];
var maioresQue15 = numeros.filter((numero) => numero > 15); // Mantém os maiores que 15
console.log(maioresQue15); // [20, 25]

// Exemplo 5 - Reduzindo a um único valor
// reduce: Processa os elementos do array de forma acumulativa, resultando em um único valor

var numeros = [1, 2, 3, 4];
var soma = numeros.reduce((acumulado, numeroAtual) => acumulado + numeroAtual); // Soma todos os números
console.log(soma); // 10

//    1 + 2 = 3    |    3 + 3 = 6    |    6 + 4 = 10

// Exemplo 6 - Reduzindo a um único valor com valor inicial
var numeros = [1, 2, 3, 4];
var soma = numeros.reduce(
    (acumulado, numeroAtual) => acumulado + numeroAtual,
    5
); // Soma todos os números
console.log(soma); // 15

//    5 + 1 = 6    |    6 + 2 = 8    |    8 + 3 = 11    |    11 + 4 = 15

// Exemplo 7 - Convertendo elementos para array
var texto = "Olá";
var array = Array.from(texto); // Converte a string "Olá" para o array ['O', 'l', 'á']
console.log(array); // ['O', 'l', 'á']

// Exemplo 8 - Copiando partes de um array
// slice: Retorna uma cópia rasa (shallow copy) de uma parte do array, sem modificar o original
var numeros = [1, 2, 3, 4, 5];
var novoArray = numeros.slice(1, 4); // Copia os elementos do índice 1 até o índice 4 (não inclui o índice 4)
console.log(novoArray); // [2, 3, 4]
console.log(numeros); // [1, 2, 3, 4, 5] (o array original não foi alterado)
