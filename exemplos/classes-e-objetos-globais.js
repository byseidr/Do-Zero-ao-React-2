// CLASSES GLOBAIS ------------------------------------------------------------

// Exemplo 1 - A classe String
// Uso: Para criar e manipular strings.
const strObj = new String("Olá");
console.log(strObj); // [String: 'Olá']

// Exemplo 2 - A classe Number
// Uso: Para criar e manipular números.
const numObj = new Number(42);
console.log(numObj); // [Number: 42]

// Exemplo 3 - A classe Boolean
// Uso: Para criar e manipular valores booleanos.
const boolObj = new Boolean(true);
console.log(boolObj); // [Boolean: true]

// Exemplo 4 - A classe Array
// Uso: Para criar e manipular arrays
const arr = new Array(1, 2, 3);
console.log(arr); // [1, 2, 3]

// Exemplo 5 - A classe Object
// Uso: Para criar e manipular objetos genéricos.
const obj = new Object();
obj.name = "Alice";
console.log(obj); // { name: "Alice" }

// Exemplo 6 - A classe Function
// Uso: Para criar e manipular funções.
const myFunc = new Function('a', 'b', 'return a + b');
console.log(myFunc(3, 4)); // 7

// Examplo 7 - A classe Date
// Uso: Para trabalhar com datas e horas.
const date = new Date();
console.log(date); // Exibe a data e hora atual
console.log(date instanceof Date); // true


// OBJETOS GLOBAIS ------------------------------------------------------------

// Exemplo 1 - O objeto console
// Uso: Para imprimir mensagens no console.
console.log("Olá, mundo!"); // Exibe "Olá, mundo!" no console
console.error("Erro detectado!"); // Exibe erro no console

// Exemplo 2 - O objeto process
// Uso: para obter informações sobre o processo executando a aplicação.
console.log(process.cwd());
console.log(process.pid);
