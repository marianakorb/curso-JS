// Escreva uma função que recebe 2 números e retorne o maior deles

// SIMPLIFICANDO O CÓDIGO (todas as formas executam do mesmo jeito, porém foi reduzido 6 linhas para 1 linha)

// Lembrete: a melhor forma é sempre a mais legível para o ser humano

function maior1(x, y) {
    if (x > y) {
        return x
    }
        return y
}

function maior2(x, y) {
    if (x > y) return x
        return y
}

function maior3(x, y) {
    return (x > y) ? x : y
} 

const maior4 = (x, y) => {
    return (x > y) ? x : y
}

// Forma menor
const maior5 = (x, y) => (x > y) ? x : y

// Forma elegante
function maior6(x, y) {
    return (Math.max(x, y))
}

console.log(maior1(16, 4))
console.log(maior2(15, 46))
console.log(maior3(1, 4))
console.log(maior4(5, 3))
console.log(maior5(22, 7))
console.log(maior6(11, 81))