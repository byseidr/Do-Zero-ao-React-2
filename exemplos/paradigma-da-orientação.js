// PARADIGMA DA ORIENTAÇÃO ----------------------------------------------------

// Exemplo 1 - Programação Orientada a Objetos (POO)
class Carro {
    constructor(modelo) {
        this.modelo = modelo;
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`${this.modelo} agora está a ${this.velocidade} km/h`);
    }

    desacelerar() {
        this.velocidade -= 10;
        console.log(`${this.modelo} desacelerou para ${this.velocidade} km/h`);
    }
}

const meuCarro = new Carro('Fusca');
meuCarro.acelerar();
meuCarro.desacelerar();

// Exemplo 2 - Programação Funcional
var modelo = 'Fusca';
var velocidade = 0;

function acelerarCarro(velocidade) {
    velocidade += 10;
    return velocidade;
}

function desacelerarCarro(velocidade) {
    velocidade -= 10;
    return velocidade;
}

velocidade = acelerarCarro(velocidade);
console.log(`${modelo} agora está a ${velocidade} km/h`);

velocidade = desacelerarCarro(velocidade);
console.log(`${modelo} desacelerou para ${velocidade} km/h`);
