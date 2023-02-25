function funcao(a, b = 2, c = 4) {
    console.log(a + b + c)
}
// a única forma de 'pular' um valor é definir como undefined
// agora 'b' recebe o valor atribuído, no caso é 2
funcao(20, undefined, 2)

// ...numeros -> o três pontos significam rest operator (que é o resto dos argumentos)
// buscar usar rest operator ao invés de arguments
// rest operator não possui discriminação com nenhum tipo de função,
// diferente de arguments que não funcionam com arrow function

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero   
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('*', 1, 10, 20, 30, 40)