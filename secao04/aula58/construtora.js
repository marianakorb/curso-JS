// Função construtora -> objetos
// -> convenção: inica com letra maiuscula Pessoa (new)

function Pessoa(nome, sobrenome) {
    // atributos ou métodos PRIVADOS
    const iD = 12345;

    const metodoInterno = function() {

    };

    // atributos ou métodos PÚBLICOS
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome} ${this.sobrenome}`)
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 =  new Pessoa('Mariana', 'Korb');

p1.metodo();
p2.metodo();
