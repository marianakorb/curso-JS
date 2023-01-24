// Laço de repetição FOR CLÁSSICO

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0
    const impar = i % 2 !== 0
    console.log(`${i} É par? ${par}. ${i} É ímpar? ${impar}`)
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(i, par)
}