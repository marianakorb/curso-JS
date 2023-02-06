const secao = document.querySelector('.container')
const d = document.createElement('div')

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] // desestruturação de objetos
    let tagCriada = document.createElement(tag)
    //tagCriada.innerText = texto 
    
    // Outra forma de adicionar texto:
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)

    d.appendChild(tagCriada)
}

secao.appendChild(d)
    
