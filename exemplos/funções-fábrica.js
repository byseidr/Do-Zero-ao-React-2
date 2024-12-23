// FUNÇÕES FÁBRICA ------------------------------------------------------------

// Exemplo 1 - Criação e uso de uma função fábrica
function criarCarro(marca, modelo, ano) {
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,

        // Método para descrever o carro
        descrever() {
            return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
        },

        // Método para simular a buzina
        buzinar() {
            return "Beep beep!";
        }
    };
}

// Criando objetos de carros
const carro1 = criarCarro("Toyota", "Corolla", 2020);
const carro2 = criarCarro("Honda", "Civic", 2022);

console.log(carro1.descrever()); // Saída: Toyota Corolla, Ano: 2020
console.log(carro2.descrever()); // Saída: Honda Civic, Ano: 2022
console.log(carro2.buzinar());   // Saída: Beep beep!
