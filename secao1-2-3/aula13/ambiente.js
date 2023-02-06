let umaString = 'Um texto'
let dia = ' Bom dia!'
console.log(umaString.concat(` em um lindo dia! ` + 10 + dia))

let outraString = 'O rato roeu a roupa do rei de roma.'
console.log(outraString.replace(/r/g, '#')) // troca algum valor 
console.log(outraString.slice(2, 6)) // pega alguma parte 
console.log(outraString.slice(-5, -1)) // pega alguma parte "de trás pra frente"
console.log(outraString.split(' ', 5)) // separa conforme você escolhe, quantas vezes