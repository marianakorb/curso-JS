// Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorne o próprio número
// Checar se o número é realmente um número 
// Use a função com números de 0 a 100
function getNumeroAleatorio(min, max) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function fizzBuzz(num) {
    if (typeof num !== 'number') return 'Não é um número'
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}
let numeroAleatorio = getNumeroAleatorio(1, 100)

console.log(numeroAleatorio, fizzBuzz(numeroAleatorio))