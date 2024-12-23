// HERANÇA EM CLASSES ---------------------------------------------------------

// Exemplo 1 - Herança de classes
class Veiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }

    mover() {
        return `${this.tipo} está se movendo.`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super("Carro"); // Chama o construtor da classe base
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    descrever() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro = new Carro("Toyota", "Corolla", 2020);
console.log(carro.mover()); // Saída: Carro está se movendo.
console.log(carro.descrever()); // Saída: Toyota Corolla, Ano: 2020
