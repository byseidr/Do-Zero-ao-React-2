// FUNÇÕES --------------------------------------------------------------------

// Exemplo 1 - Código repetitivo sem funções
// Cálculo da área do círculo
var raio = 5;
var areaCirculo = 3.14 * raio * raio;
console.log("Área do círculo:", areaCirculo);

// Cálculo da área do retângulo
var largura = 10;
var altura = 5;
var areaRetangulo = largura * altura;
console.log("Área do retângulo:", areaRetangulo);

// Cálculo da área do círculo novamente
var raio2 = 7;
var areaCirculo2 = 3.14 * raio2 * raio2;
console.log("Área do segundo círculo:", areaCirculo2);

// Exemplo 2 - Código eficaz com funções
// Função para calcular a área do círculo
function calcularAreaCirculo(raio) {
    return 3.14 * raio * raio;
}

// Função para calcular a área do retângulo
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

// Usando as funções
var areaCirculo = calcularAreaCirculo(5);
console.log("Área do círculo:", areaCirculo);

var areaRetangulo = calcularAreaRetangulo(10, 5);
console.log("Área do retângulo:", areaRetangulo);

var areaCirculo2 = calcularAreaCirculo(7);
console.log("Área do segundo círculo:", areaCirculo2);
