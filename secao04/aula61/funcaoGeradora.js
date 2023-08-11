//Geradores são funções cuja execução pode ser 
//interrompida e posteriormente reconduzida. Seus 
//contextos (de associações de variáveis) ficarão salvos entre cada recondução.
function* geradora01() {
    // Código qualqquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';

}

const g1 = geradora01();
// console.log(g1.next().value);

for(let valor of g1) {
    console.log(valor);
}
//-----------------------------------------
function* geradora02() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora03() {
    yield* geradora02();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora03();
for(let valor of g3) {
    console.log(valor)
}


//funções geradoras e promises são usadas para montar código assíncrono... 
//As funções geradoras são mais similares à funções normais, você cria um 
//código assíncrono que parece síncrono... Você pode atingir quase o mesmo 
//objetivo com async/await ou promises.

//Tem bibliotecas que usam apenas funções geradoras, como vamos ver 
//posteriormente com redux saga.

//A gente usa elas para coisas que podem demorar demais ou coisas 
//muito grandes, por exemplo, abrir arquivos grandes, ler linhas de base de dados, etc...
//Coisas que demoraria e demandaria muitos recursos para ler por completo.



//Chamar uma função geradora não executa seu conteúdo imediatamente; ao invés disso um objeto iterator (en-US) 
//é retornado. Quando o método next() do objeto iterator é chamado, o conteúdo da função do gerador é 
//executado até a primeira expressão yield, que especifica o valor a ser devolvido do iterator ou com yield* 
//que delega para outra função geradora. O método next() retorna um objeto com uma propriedade value contendo 
//o valor retornado e a propriedade boolean: done indicando se o gerador produziu seu último valor. Chamar 
//o método next() com um argumento resumirá a execução da função geradora, substituindo a expressão yield 
//onde a execução foi pausada com o argumento de next().
