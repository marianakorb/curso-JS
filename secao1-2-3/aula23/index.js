/**
 * Valores que avaliam em falso(FALSY)
 * - 0 
 * - " " '' ` `
 * - NaN
 * - undefined
 * - null
 */

/*
    && -> retorna o primeiro valor false
    ou retorna o último true

    || -> retorna o primeiro valor true 
    ou retorna o último false
*/

const corUsuario = 'roxo' 
const corPadrao = corUsuario || 'azul' // roxo
console.log(corPadrao)

const mensagem = 'Boa noite'
const mensagemPadrao = 'Bom dia' && mensagem // Boa noite
console.log(mensagemPadrao)