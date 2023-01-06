const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    setResultado('Olá mundo!');
});

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = msg;
    resultado.appendChild(p);
}
