// Tratando e Lançando erros (try, catch, throw)

// throw: lança o erro
// catch: captura o erro
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
    }

    return x + y
}

// Se ocorrer qualquer erro dentro do bloco try,
// catch será executado. Se não ocorrer nenhum erro
// dentro do bloco try, o bloco try será executado.

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error) {
    // console.log(error) // NÃO FAZER
    console.log('Alguma coisa mais amigável para o usuário.')
}

// Nunca exibir o error para o usuário