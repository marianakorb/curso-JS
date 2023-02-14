// Declaração de funçãoo (Function hoisting):

/* JavaScript Hoisting refere-se ao processo pelo qual o interpretador parece mover a declaração de funções, variáveis ​​ou classes para o topo de seu escopo, antes da execução do código.
 */
falaOi() 
function falaOi() {
    console.log('Oi')
}

//First-class objects (objetos de primeira classe)
// a função pode ser tratada com um dado
// Function expression:

const souUmDado = function() {
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    funcao()
}
executaFuncao(souUmDado)

// Por que usar função como parâmetro de outra  função?
/* Javascript é uma linguagem assíncrona por natureza, isso quer dizer que muitas coisas ocorrem em paralelo. Um dos casos mais úteis de utilizar higher order functions (funções que recebem e retornam funções) é criar uma cadeia, ou uma sequência de coisas que podem ocorrer em ordem. Por exemplo, utilizar callbacks para serem executados antes e/ou depois da tarefa principal.
Isso faz parte do paradigma de programação funcional, e é um dos principais tópicos do paradigma descrito.
*/

// Arrow function:

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto:

const obj = {
    //falar: function() {} OU:
    falar() {
        console.log('Estou falando...')
    }
}
obj.falar()


