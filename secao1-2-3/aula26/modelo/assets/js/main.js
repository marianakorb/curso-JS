
function calcular() {
    const form = document.querySelector('#formulario')
    form.addEventListener('submit', function(event){
        event.preventDefault()
    });

    const pesotexto = document.querySelector('#peso')
    const alturatexto = document.querySelector('#altura')
    let resultado = document.querySelector('div.resultado')
    
    let res = ''
    const peso = Number(pesotexto.value)
    const altura = Number(alturatexto.value)

    const imc1 = peso / altura ** 2
    const imc = imc1.toFixed(2)

    if (imc <= 18.5) {
        res = 'Abaixo do peso'
    } else if (imc >= 18.6 && imc <= 24.9) {
        res = 'com Peso Normal'
    } else if (imc >= 25 && imc <= 29.9) {
        res = 'em Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        res = 'com Obesidade grau 1'
    } else if (imc >= 35 && imc <= 39.9) {
        res = 'com Obesidade grau 2'
    } else if (imc >= 40 && imc <= 50){
        res = 'com Obesidade grau 3'
    } else {
        res = `MORRENDO`
    }

    if (alturatexto.value.length == 0 && pesotexto.value.length == 0) {
        resultado.innerHTML = 'Preencha os campos'
        resultado.classList.add('cordiv')
        
    } else if (!peso || pesotexto.value.length == 0) {
        resultado.innerHTML = 'Peso Inválido'
        resultado.classList.add('cordiv')
        
    } else if (!altura || alturatexto.value.length == 0){
        resultado.innerHTML = 'Altura Inválida'
        resultado.classList.add('cordiv')
        
    } else {
        resultado.innerHTML = `Seu imc é ${imc}, você está ${res}`
        resultado.classList.remove('cordiv')
    } 
}