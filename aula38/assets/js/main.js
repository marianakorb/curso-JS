// NodeList
const div = document.querySelector('.paragrafos')
const paragrafos = document.querySelectorAll('p')

// pegar estilos de algum elemento 
const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
    p.style.padding = '5px 10px'
}