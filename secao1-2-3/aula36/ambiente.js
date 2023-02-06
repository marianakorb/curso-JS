// FOR in - Estrutura de repetição
// -> irá ler os índices da array ou as chaves do objeto

const pessoa = {
    nome: 'Mariana',
    sobrenome: 'Korb',
    idade: 21
}
for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
    // nome Mariana
    // sobrenome Korb
    // idade 21

}

// Forma dinâmica de "pegar" chave de um objeto
let chave = 'sobrenome'
console.log(pessoa[chave]) // Korb

const frutas = ['banana', 'uva', 'manga']

for (let indice in frutas) {
    console.log(frutas[indice]) // banana uva manga
} 