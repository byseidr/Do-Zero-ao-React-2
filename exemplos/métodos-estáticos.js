// MÉTODOS ESTÁTICOS -----------------------------------------------------

// Exemplo 1 - Método acessível diretamente pela classe
class Carro {
    constructor(modelo) {
        if (Carro.validarModelo(modelo)) {
            this.modelo = modelo;
        } else {
            throw new Error("Modelo inválido");
        }
    }

    // Método estático
    static validarModelo(modelo) {
        return modelo.length > 2; // Modelo deve ter mais de 2 caracteres
    }
}

// Criando carros
var carro1 = new Carro("Sedan");

// Usando o método estático
console.log(Carro.validarModelo("SUV")); // true
console.log(Carro.validarModelo("A")); // false
console.log(carro1.validarModelo("SUV")); // TypeError: carro1.validarModelo is not a function

// Exemplo 2 - Erro ao acessar métodos normais em um método estático
class Carro {
    constructor(modelo) {
        if (Carro.validarModelo(modelo)) {
            this.velocidade = modelo;
        } else {
            throw new Error("Modelo inválido");
        }
    }

    // Método normal para simular a buzina
    buzinar() {
        return "Beep beep!";
    }

    // Método estático
    static validarModeloEBuzinar(modelo) {
        this.buzinar();
        return modelo.length > 2;
    }
}

Carro.validarModeloEBuzinar("SUV"); // TypeError: this.buzinar is not a function
