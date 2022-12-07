const nome = 'Mariana';
const sobrenome = 'Korb';
const peso = 54;
const alturaEmM = 1.7;
const anoNascimento = 2002
let imc = peso / (alturaEmM * alturaEmM)
let ano = new Date()
let anoAtual = ano.getFullYear()
let idade = anoAtual - anoNascimento 

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}, tem ${peso}kg e ${alturaEmM} de altura.
Logo seu IMC é ${imc} e possui ${idade} anos de idade.`)

