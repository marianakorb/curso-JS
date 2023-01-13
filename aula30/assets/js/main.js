/* const titulo = document.querySelector('.container h1')
const data = new Date()

function getSemanaTexto (diaSemana) {
    let diaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Sengunda-feira'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = ' '
            return diaSemanaTexto;
    }
}

function getMesTexto (nomeMes) {
    let mesTexto 

    switch (nomeMes) {
        case 0:
            mesTexto = 'Janeiro'
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro'
            return mesTexto;
        case 2:
            mesTexto = 'Março'
            return mesTexto;
        case 3:
            mesTexto = 'Abril'
            return mesTexto;
        case 4:
            mesTexto = 'Maio'
            return mesTexto;
        case 5:
            mesTexto = 'Junho'
            return mesTexto;
        case 6:
            mesTexto = 'Julho'
            return mesTexto;
        case 7:
            mesTexto = 'Agosto'
            return mesTexto;
        case 8:
            mesTexto = 'Setembro'
            return mesTexto;
        case 9:
            mesTexto = 'Outubro'
            return mesTexto;
        case 10:
            mesTexto = 'Novembro'
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro'
            return mesTexto;
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function criaData (data) {
    const diaDaSemana = data.getDay()
    const mesDoAno = data.getMonth()
    const dia = data.getDate()
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    const semana = getSemanaTexto(diaDaSemana)
    const mes = getMesTexto(mesDoAno)  
    
    return (`${semana}, ${dia} de ${mes} de ${ano}, ${hora}:${minutos}:${seg}`)
}

titulo.innerHTML= criaData(data) */

// MANEIRA SIMPLIFICADA:

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full', timeStyle: 'medium'
})