// Aqui a função é chamada com os argumentos/valores(parâmetros), mas não os 
// parâmentros não são declarados na função
// para acessar  os parêmetros usá-se 'arguments'
// que 'armazena' esses argumentos em uma array/objeto
// arguments sustenta todos os argumentos enviados, mas só com funções criadas com a palavra function.
// arguments não funciona para arrow function

function funcao() {
    let total = 0
    for(let argumento of arguments) {
        total += argumento
    }
    console.log(total, arguments)
    
}
funcao(1, 2, 3, 4, 5, 6, 7)

// DICA: invés de usar arguments, buscar usar rest operator (os três pontinhos)