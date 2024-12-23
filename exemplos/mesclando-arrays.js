// MESCLANDO ARRAYS -----------------------------------------------------------

// Exemplo 1 - Mesclando dois arrays
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var arrayMesclado = array1.concat(array2);

console.log(arrayMesclado);
// [1, 2, 3, 4, 5, 6]

// Exemplo 2 - Clonando um array (do jeito errado)
var array1 = [1, 2, 3];
var array2 = array1;

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

array2.push(4);

console.log(array2); // [1, 2, 3, 4]
console.log(array1); // ...

// Exemplo 3 - Clonando um array (do jeito certo)
var array1 = [1, 2, 3];
var array2 = [].concat(array1);
// var array2 = array1.slice();

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

array2.push(4);

console.log(array2); // [1, 2, 3, 4]
console.log(array1); // ...

// Exemplo 4 - Clonagem superficial de um array
var array1 = [1, 2, 3, [10, 20, 30]];
var array2 = array1.slice();

console.log(array1[3]); // [10, 20, 30]
console.log(array2[3]); // [10, 20, 30]

array2[3].push(40);

console.log(array2[3]); // [10, 20, 30]
console.log(array1[3]); // ...
