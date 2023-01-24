// Laço de repetição FOR CLÁSSICO

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0
    const impar = i % 2 !== 0
    console.log(`${i} É par? ${par}. ${i} É ímpar? ${impar}`)
}
// O que irá exibir:
/*
0 É par? true. 0 É ímpar? false
1 É par? false. 1 É ímpar? true
2 É par? true. 2 É ímpar? false
3 É par? false. 3 É ímpar? true
4 É par? true. 4 É ímpar? false
5 É par? false. 5 É ímpar? true
6 É par? true. 6 É ímpar? false
7 É par? false. 7 É ímpar? true
8 É par? true. 8 É ímpar? false
9 É par? false. 9 É ímpar? true
10 É par? true. 10 É ímpar? false
 */

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar'
    console.log(i, par)
}
// O que irá exibir:
/*
0 par
1 ímpar
2 par
3 ímpar
4 par
5 ímpar
6 par
7 ímpar
8 par
9 ímpar
10 par
 */