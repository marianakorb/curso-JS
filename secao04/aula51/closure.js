/* Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). 
Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. 
Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função. */

function criaUmaFuncao(esseValorSeraLembrado) {
    // O valor que eu passar para esseValorSeraLembrado
    // Ficará preso aqui, até que a função abaixo seja executada
    return function (parametro) {
      console.log(esseValorSeraLembrado, parametro);
    };
}
  
const funcao1 = criaUmaFuncao('Valor Lembrado 1');
const funcao2 = criaUmaFuncao('Valor Lembrado 2');

/* Como funcao1 e funcao2 também são funções (a função retornada por criaUmaFuncao),
elas também podem receber parâmetros: */

funcao1('parametro 1'); // Valor Lembrado 1 parametro 1
funcao2('parametro 2'); // Valor Lembrado 2 parametro 2

/* Variáveis funcao1 e funcao2 tem duas funções diferentes... ambas são o retorno de criaUmaFuncao. 
Mas cada uma é uma função diferente... Como essas funções "lembram" o valor do parâmetro esseValorSeraLembrado, 
toda vez que você executar cada uma delas, esse parâmetro vai ter o valor que foi usado na hora da chamada para função criaUmaFuncao. 
Isso se chama closure. */