// COMPARTILHAMENTO EM CLASSES ------------------------------------------------

// Exemplo 1 - Dois objetos criados da mesma classe usam o mesmo método
class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
    }

    dirigir() {
        console.log(`${this.modelo} está dirigindo.`);
    }
}

const carro1 = new Carro("Sedan", "Vermelho");
const carro2 = new Carro("SUV", "Azul");

// Ambos os objetos compartilham o mesmo método "dirigir"
console.log(carro1.dirigir === carro2.dirigir); // true

// Exemplo 2 - Dois objetos criados da mesma função fábrica NÃO usam o mesmo método
function criarCarro(modelo, cor) {
    return {
        modelo: modelo,
        cor: cor,
        dirigir() {
            console.log(`${modelo} está dirigindo.`);
        }
    };
}

const carro3 = criarCarro("Sedan", "Vermelho");
const carro4 = criarCarro("SUV", "Azul");

// Ambos os objetos NÃO compartilham o mesmo método "dirigir"
console.log(carro3.dirigir === carro4.dirigir); // false
