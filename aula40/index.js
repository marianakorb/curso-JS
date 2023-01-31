// break e continue
// continue: continua para a próxima iteração
// break: sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o 2')
        continue
    }

    console.log(numero)

    if (numero === 7) {
        console.log('Encontrei o 7, saindo do bloco...')
        break
    }
}
console.log('-----------')

// Quando a variável de controle é atualizada dentro do
// bloco do laço é preciso atualizá-la antes de break e
// continue também, pois senão entra em looping infinito
let i = 0
while (i < numeros.length) {
    const numero = numeros[i]

    if (numero === 2) {
        console.log('Pulei o 2')
        i++
        continue
    }
    console.log(numero)

    if (numero === 7) {
        console.log('Encontrei o 7, saindo do bloco...')
        i++
        break
    }
    i++
}