// PROPRIEDADES ESTÁTICAS -----------------------------------------------------

// Exemplo 1 - Propriedade acessível diretamente pela classe
class Carro {
    static quantidadeFabricada = 0;

    constructor(modelo) {
        this.modelo = modelo;
        Carro.quantidadeFabricada++; // Atualiza a propriedade estática
    }
}

// Criando carros
var carro1 = new Carro("Sedan");
var carro2 = new Carro("SUV");

console.log(Carro.quantidadeFabricada); // 2
console.log(carro1.quantidadeFabricada); // undefined (acesso apenas via classe)

// Exemplo 2 - Erro ao acessar propriedades normais em uma propriedade estática

class Carro {
    static modeloMaisRecente = modelo; // ReferenceError: modelo is not defined

    constructor(modelo) {
        this.modelo = modelo;
    }
}
