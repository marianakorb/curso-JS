const num = Number(prompt('Digite um número: '))

let numeroTitulo = document.getElementById('numero-titulo')
let item = document.getElementById('lista')

numeroTitulo.innerHTML += ` ${num}`


let raiz = num ** (1/2)
let inteiro = Number.isInteger(num)
let notANumber = Number.isNaN(num)
let toDown = Math.floor(num)
let toUp = Math.ceil(num)
let duasCasas = num.toFixed(2)

item.innerHTML = `<p>A raiz quadrada é: ${raiz}</p>`
item.innerHTML += `<p>É inteiro? ${inteiro}</p>`
item.innerHTML += `<p>É NaN? ${notANumber}</p>`
item.innerHTML += `<p>Arredondado para baixo: ${toDown}</p>`
item.innerHTML += `<p>Arredondado para cima: ${toUp}</p>`
item.innerHTML += `<p>Com duas casas decimais: ${duasCasas}</p>`

