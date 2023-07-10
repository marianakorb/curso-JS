// FUNÇÕES IMEDIATAS (IIFE)
// Immediately invoked function expression

(function(idade) {

    const sobrenome = 'Korb';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;

    }

    function falaNome() {
        console.log(criaNome('Mariana'))
    }

    falaNome();
    console.log(idade)

})(21);