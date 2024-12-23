// LEGIBILIDADE EM CLASSES ----------------------------------------------------

// Exemplo 1 - Declaração de uma classe
// Classe é mais declarativa
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    descrever() {
        return `${this.marca} ${this.modelo}`;
    }
}

// Exemplo 2 - Declaração de uma função fábrica
// Função fábrica com métodos no objeto retornado
function criarCarro(marca, modelo) {
    return {
        marca,
        modelo,
        descrever() {
            return `${marca} ${modelo}`;
        }
    };
}
