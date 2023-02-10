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
    salvarTarefas()
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
        salvarTarefas()
    }
    
})

// Salvando as tarefas
// - ver quantos li possui dentro das tarefas e pegar os textos deles
// criar uma array com os textos de cada li
// JSON.stringify() -> converter essa array em uma string única
// para então poder armazená-la no localStorege do navegador usando JSON

function salvarTarefas() {
    // pegando os li de tarefas
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        //substituindo o 'X' para espaço vazio
        //trim() -> remove os espaços no final do texto
        tarefaTexto = tarefaTexto.replace('X', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    //fazer com que a lista de tarefas vire uma string única
    const tarefasJSON = JSON.stringify(listaDeTarefas)

    // localStorage -> local no navegador onde vc pode salvar coisas (como se fosse uma mini base de dados)
    localStorage.setItem('tarefas'/*Key*/, tarefasJSON /*Value*/) // aqui só se pode salvar strings
    // 'tarefas' é o nome que será usado para recuperar de novo
    // tarefasJSON é o valor de 'tarefas'
    console.log(tarefasJSON)
}

// Ler as tarefas e jogar de volta na ul
// pego as tarefas salvas usando a key 'tarefas'
// para resgatar do localStorege usa get, para armazernar usa set
// JSON.parse() -> converter a string em array novamente para usa-lá 
// passar a array no laço de repetição para recriar cada tarefa na ul

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas') //'key'

    //converter as tarefas de volta para um array
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()