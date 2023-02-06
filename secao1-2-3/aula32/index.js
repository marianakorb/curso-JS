// Atribuição via desestruturação (array)

const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numeros
console.log(lista3[1]) // 8
console.log(lista1[0]) // 1
console.log(numeros[1][2]) // 6


let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a]
console.log(letras)
