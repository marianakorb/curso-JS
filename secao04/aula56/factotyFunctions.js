// FACTORY FUNCTIONS (função fábrica)- retornam objetos 
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,  
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

            console.log(valor);
        },

        fala: function(assunto) {
            return `${this.nome} está falando sobre ${assunto}, essa pessoa tem ${this.peso}kg`;
        },

        peso: peso,

        altura: altura,

        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Mariana', 'Korb', 1.7, 54);

console.log(p1.fala('JavaScript')); // função (método)

console.log(p1.imc); // atributo getter

p1.nomeCompleto = 'José da Silva'; // atributo setter

console.log(p1.nomeCompleto);
