const pessoa = {
    nome: 'Mariana',
    sobrenome: 'Korb',
    idade: 21,
    endereco: {
        rua: 'Reinaldo Ferreira',
        numero: 271,
        complemento: 'casa'
    }
}

// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

const {
    nome, // nome da variável igual
    sobrenome: s, // mudando o nome da variável 
    endereco: {numero}, // objeto dentro de outro objeto
    endereco
} = pessoa

console.log(nome, s, numero) // Mariana Korb 271
console.log(endereco) // { rua: 'Reinaldo Ferreira', numero: 271, complemento: 'casa' }