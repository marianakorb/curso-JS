const dia = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado',);
const mes = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
const data = new Date();
 
console.log(`Hoje é ${dia[data.getDay()]}, dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`);