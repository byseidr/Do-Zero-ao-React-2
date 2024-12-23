// DECLARAÇÕES ----------------------------------------------------------------

// Exemplo 1 - "function" é uma declaração
function exemplo() {
    return; // "return" também é uma declaração
}


// DECLARAÇÃO QUE GERA EXPRESSÕES ---------------------------------------------

// Exemplo 1 - Expressão do tipo "function"
// Aqui, a declaração function gera um objeto do tipo "function", que é uma expressão
function soma() {
    return 3 + 2;
}

console.log(typeof soma); // Expressão do tipo "function"

// Exemplo 2 - Expressão do tipo "number"
soma(); // A chamada para a função soma() gera uma outra expressão. O resultado é o número 5
console.log(typeof soma()); // Expressão do tipo "number"


// DECLARAÇÃO QUE USA (RETORNA) UMA EXPRESSÃO ---------------------------------

// Exemplo 1 - A instrução "return"
return 3 + 2; // Aqui, "return" é uma declaração, mas "3 + 2" é uma expressão.

function teste() {
    return 3 + 2;
}
