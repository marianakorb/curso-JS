// Escreva uma função chamada isPaisagem que recebe dois 
//argumentos, largura e altura de uma imagem (numeber).
// Retorne true se a imagem estiver no modo paisagem

function isPaisagem(larg, alt) {
    // Simplificando o código
    // return larg > alt ? true : false;
    return larg > alt // já retorne true ou false
}

// Reescrevendo para ARROW FUNCTIONS:
const isPaisagem2 = (larg, alt) => larg > alt

console.log(isPaisagem(1920, 1080))
console.log(isPaisagem2(1080, 1920))