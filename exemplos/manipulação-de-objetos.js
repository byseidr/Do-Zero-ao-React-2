// MANIPULAÇÃO DE OBJETOS -----------------------------------------------------

// Exemplo 1 - Obtendo as chaves das propriedades em um array
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

console.log(Object.keys(carro)); // ["marca", "modelo"]

// Exemplo 2 - Obtendo os valores das propriedades em um array
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

console.log(Object.values(carro)); // ["Toyota", "Corolla"]

// Exemplo 3 - Obtendo pares de chave e valor em um array de arrays
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

console.log(Object.entries(carro));
// [["marca", "Toyota"], ["modelo", "Corolla"]]

// Exemplo 4 - Verificando a existência de propriedades
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
};

console.log("marca" in carro); // true
console.log(carro.hasOwnProperty("modelo")); // true

// Exemplo 5 - Iterando sobre as chaves das propriedades
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "preto",
};

for (let chave in carro) {
    console.log(chave);
}
// Saída:
// marca
// modelo
// cor

// Exemplo 6 - Iterando sobre os valores das propriedades
var carro = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "preto",
};

for (let valor of Object.values(carro)) {
    console.log(valor);
}
// Saída:
// Toyota
// Corolla
// preto

// Exemplo 7 - Iterando sobre as chaves e os valores das propriedades
for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}
// Saída:
// marca: Toyota
// modelo: Camry
// cor: preto
