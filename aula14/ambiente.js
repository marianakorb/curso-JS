let num1 = 1500 //number
let temp = num1 * 'oi' // NaN

console.log(num1.toString) // muda typeof para string
console.log(num1.toString(2)) // número em binário
console.log(Number.isInteger(num1)) // retorna se é inteiro ou não
console.log(Number.isNaN(temp)) //retorna se é NaN ou não

let n2 = 0.7
let n3 = 0.2
let res = n2 + n3
console.log(res.toFixed(1))