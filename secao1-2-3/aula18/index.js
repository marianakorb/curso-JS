// Criando uma função para gerar mais de um objeto
// com os mesmos atributos:
function criaPessoa(nome, sobrenome, idade) {
     return {
        nome,           // nome: nome,, 
        sobrenome,      // sobrenome: sobrenome,
        idade,          // idade: idade
     }
};

const pessoa1 = criaPessoa('Mariana', 'Korb', 20);
const pessoa2 = criaPessoa('Joana', 'Silva', 32);
const pessoa3 = criaPessoa('Tobias', 'Castro', 26);
const pessoa4 = criaPessoa('Diana', 'Maria', 76);
const pessoa5 = criaPessoa('Romulo', 'Estrela', 45);

console.log(pessoa1.nome, pessoa4.nome, pessoa3.idade)
