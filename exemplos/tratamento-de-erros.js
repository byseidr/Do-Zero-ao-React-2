// TRATAMENTO DE ERROS --------------------------------------------------------

// Exemplo 1 - Estruturas try e catch com uma exceção
try {
    // Código que gera um erro
    const texto = undefined;
    console.log(texto.length); // Isso gera um erro porque texto é `undefined`
} catch (erro) {
    // Código para tratar o erro
    console.log("Ocorreu um erro:", erro.message);
}

// Exemplo 2 - Informações recebidas pelo catch
try {
    const texto = undefined;
    console.log(texto.length);
} catch (erro) {
    console.log(erro.name);    // TypeError
    console.log(erro.message); // Cannot read properties of undefined (reading 'length')
}

// Exemplo 3 - Estruturas try e catch com um erro de síntaxe
try {
    // Código que gera um erro
    // console.log("Olá, mundo!";
        // Erro de sintaxe: falta fechar o parêntese        
} catch (erro) {
    // Código para tratar o erro
    console.log("Ocorreu um erro:", erro.message);
}

// Exemplo 4 - Criando exceções com a instrução throw
function validarIdade(idade) {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa!");
    }
}

try {
    validarIdade(-5); // Lança erro personalizado
} catch (erro) {
    console.log(`${erro.name}: ${erro.message}`);
}

// Exemplo 5 - O objeto global Error
function validarIdade(idade) {
    if (idade < 0) {
        throw new Error("A idade não pode ser negativa!");
    }
}

try {
    validarIdade(-5); // Lança erro personalizado
} catch (erro) {
    console.log(erro.message);
    console.log(erro.stack);
}

// Exemplo 6 - Exceção sendo lançada sem fazer uso do objeto Error
try {
    throw "Um erro ocorreu!";
} catch (erro) {
    console.log(erro); // Um erro ocorreu!
    console.log(erro.message); // undefined
    console.log(erro.stack); // undefined
}

// Exemplo 7 - Utilizando a estrutura finally
function processarDados(dados) {
    try {
        if (!dados) throw new Error("Dados inválidos!");
        console.log("Processando dados...");
        return "Processamento concluído";
    } catch (erro) {
        console.log("Erro capturado:", erro.message);
    } finally {
        // Sempre será executado
        console.log("Limpando recursos...");
    }
}

processarDados(null);
// Resultado:
// "Erro capturado: Dados inválidos!"
// "Limpando recursos..." será exibido mesmo com o erro.
