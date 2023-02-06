
try {
    // É executado quando não há erros
    console.log(algumErro)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (e) {
    // É executado quando há erros
    console.log('Tratando o erro')
} finally {
    // É sempre executado
    console.log('FINNALY: Eu sempre sou executado')
    console.log('Tentar fechar o arquivo')
}