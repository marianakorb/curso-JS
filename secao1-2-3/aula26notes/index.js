const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    setResultado('Olá mundo!');
});

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado'); // adiciona uma class no parágrafo
    p.innerHTML = msg; // exibe a mensagem recebida pelo parâmetro
    resultado.appendChild(p); 
}
