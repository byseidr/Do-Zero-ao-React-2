// PRÉ-INCREMENTO E PÓS-INCREMENTO --------------------------------------------

// Exemplo 1 - Pré-incremento
let a = 5;
let b = ++a; // A variável 'a' é incrementada primeiro, depois 'b' recebe o valor de 'a'

console.log(a); // 6
console.log(b); // 6

// Exemplo 2 - Pós-incremento
let x = 5;
let y = x++; // A variável 'y' recebe o valor de 'x' antes de ser incrementado
let z = x; // A variável 'z' recebe o valor de 'x' após ser incrementado

console.log(x); // 6
console.log(y); // 5
console.log(z); // 6
