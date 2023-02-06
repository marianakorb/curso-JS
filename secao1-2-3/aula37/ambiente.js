// FOR of - lê cada valor do array ou da string, sem retornar o índice, apenar o valor do índice.

const nome = 'Mariana'
for (let valor of nome) {
    console.log(valor)
    /**
     * M
     * a
     * r
     * i
     * a
     * n
     * a
     */
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)


const frutas = ['uva', 'manga', 'kiwi']
/**
 * O método forEach é uma ação de iteração que executa uma função para cada elemento, seja de arrays simples ou arrays de objetos. Ele também pode ser usado em Mapas e Conjuntos na matriz de dados.
 */
frutas.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
    // uva 0 [ 'uva', 'manga', 'kiwi' ]
    // manga 1 [ 'uva', 'manga', 'kiwi' ]
    // kiwi 2 [ 'uva', 'manga', 'kiwi' ]
})