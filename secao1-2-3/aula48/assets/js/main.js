const inputTarefa = document.querySelector('.input-tarefa')
const bntTarefa = document.querySelector('.bnt-tarefa')
const tarefas = document.querySelector('.tarefas')

// Cria o elemento li 
function criaLi() {
    const li = document.createElement('li')
    return li
}

// Recebe o li para "escrever" a tarefa na lista, depois limpa o input
function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
}

// Limpa o input e volta a focar o curso no input
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

// Adiciona a tarefa ao pressionar a tecla Enter
inputTarefa.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

// Adiciona a tarefa ao clicar no button
bntTarefa.addEventListener('click', function(e) {
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

// Cria um botão apagar ao lado de cada tarefa adicionada
function criaBotaoApagar(li) {
    li.innerText += '  '
    const botaoApagar = document.createElement('button') 
    botaoApagar.innerText = 'X'
    // setAttribute adiciona um atributo ao elemento ('o atributo', 'o valor do atributo')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefa')
    li.appendChild(botaoApagar)
}

// Remove tarefa que são apagadas 
document.addEventListener('click', function(e) {
    const elemento = e.target // recebe o evento (qual elemento está sendo clicado)

    // se o que for cliclado contém a class 'apagar' executa o bloco
    if(elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()
    }
    
})