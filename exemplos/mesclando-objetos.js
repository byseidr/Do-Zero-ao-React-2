// MESCLANDO OBJETOS ----------------------------------------------------------

// Exemplo 1 - Mesclando dois objetos
var carro = {
    marca: "Toyota",
    modelo: "Camry",
    cor: "preto",
};
var detalhesExtras = { combustivel: "Gasolina", portas: 4 };

var carroCompleto = Object.assign(carro, detalhesExtras);

console.log(carroCompleto);
// { marca: "Toyota", modelo: "Camry", cor: "preto", combustivel: "Gasolina", portas: 4 }

// Exemplo 2 - Clonando um objeto (do jeito errado)
var carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "preto",
};
var carro2 = carro1;

console.log(carro1.cor); // preto
console.log(carro2.cor); // preto

carro2.cor = "vermelho";

console.log(carro2.cor); // vermelho
console.log(carro1.cor); // ...

// Exemplo 3 - Clonando um objeto (do jeito certo)
var carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "preto",
};
var carro2 = Object.assign({}, carro1);

console.log(carro1.cor); // preto
console.log(carro2.cor); // preto

carro2.cor = "vermelho";

console.log(carro2.cor); // vermelho
console.log(carro1.cor); // ...

// Exemplo 4 - Clonagem superficial de um objeto
var carro1 = {
    marca: "Toyota",
    modelo: "Corolla",
    cor: "preto",
    motor: {
        tipo: "V6",
        potencia: "300 CV",
        cilindrada: "3.5L",
    },
};
var carro2 = Object.assign({}, carro1);

console.log(carro1.motor.potencia); // 300 CV
console.log(carro2.motor.potencia); // 300 CV

carro2.motor.potencia = "350 CV";

console.log(carro2.motor.potencia); // 350 CV
console.log(carro1.motor.potencia); // ...
