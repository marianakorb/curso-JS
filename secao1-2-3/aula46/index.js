
// setInterval e setTimeout
function mostraHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// De quanto em quanto o timer irá funcionar (a cada 1 segundo)
const timer = setInterval(function() {
    console.log(mostraHora())
}, 1000)

// Quando irá parar (depois de 5 segundos)
setTimeout(function () {
    clearInterval(timer)
}, 5000)

// Depois de 7 segundos exibe a mensagem
setTimeout(function() {
    console.log('Olá mundo!')
}, 7000)