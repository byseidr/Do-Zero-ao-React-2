// CLASSES --------------------------------------------------------------------

// Exemplo 1 - Criação e uso de uma classe
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método para descrever o carro
    descrever() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }

    // Método para simular a buzina
    buzinar() {
        return "Beep beep!";
    }
}

// Criando objetos de carros
const carro1 = new Carro("Toyota", "Corolla", 2020);
const carro2 = new Carro("Honda", "Civic", 2019);

console.log(carro1.descrever()); // Saída: Toyota Corolla, Ano: 2020
console.log(carro2.buzinar());   // Saída: Beep beep!
