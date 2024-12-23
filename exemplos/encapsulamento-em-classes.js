// ENCAPSULAMENTO -------------------------------------------------------------

// Exemplo 1 - Propriedade pública
class Carro {
    modelo = "Fusca"; // Público

    ligar() {
        console.log(`O ${this.modelo} foi ligado!`);
    }
}

const meuCarro1 = new Carro();
console.log(meuCarro1.modelo); // Acessível: Fusca

// Exemplo 2 - Propriedade privada
class Carro {
    #velocidade = 0; // Propriedade privada

    acelerar() {
        this.#velocidade += 10; // Só acessível dentro da classe
        console.log(`Velocidade atual: ${this.#velocidade} km/h`);
    }

    frear() {
        this.#velocidade -= 5;
        if (this.#velocidade < 0) this.#velocidade = 0;
        console.log(`Velocidade atual: ${this.#velocidade} km/h`);
    }
}

const meuCarro2 = new Carro();
meuCarro2.acelerar(); // Velocidade atual: 10 km/h
meuCarro2.acelerar(); // Velocidade atual: 20 km/h
meuCarro2.frear(); // Velocidade atual: 15 km/h

// Tentando acessar a velocidade diretamente:
// console.log(meuCarro.#velocidade); // ERRO! Não permitido.

// Exemplo 3 - Método privado
class Carro {
    modelo = "Fusca"; // Público
    #estadoDoMotor = "parado"; // Propriedade privada

    constructor(modelo) {
        this.modelo = modelo;
    }

    ligar() {
        this.#alterarEstadoDoMotor("rodando");
        console.log(`O ${this.modelo} foi ligado!`);
    }

    #alterarEstadoDoMotor(valor) { // Método privado
        this.#estadoDoMotor += valor;
    }
}

const meuCarro3 = new Carro("Fusca");

// Interação válida
meuCarro3.ligar(); // O Fusca foi ligado!

// Interação inválida
// meuCarro3.#alterarEstadoDoMotor("rodando"); // SyntaxError: Private field '#alterarEstadoDoMotor' must be declared in an enclosing class
