// while e do while
// usado quando não sabemos quantas repetitições irão acontecer/ocorrer

let i = 0
// checa a condição, depois executa o código
while (i <= 10) {
    console.log(i)
    i++
}
console.log('-------')

let j = 10
// executa o código, depois checa a condição (ou seja, irá sempre executar o código PELO MENOS UMA VEZ)
do {
    console.log(j)
    j--
} while (j >= 0);
 
//gera um número aleatório
function numeroAleatorio(min, max) {
    const aleatorio = Math.random() * (max - min) + min
    return Math.floor(aleatorio)
}

const ma = 50
const mi = 1
let rand = numeroAleatorio(mi, ma)

while (rand !== 10) {
    rand = numeroAleatorio(mi, ma)
    console.log(rand)
}
console.log('***********')
do {
    rand = numeroAleatorio(mi, ma)
    console.log(rand)
} while(rand !== 10);