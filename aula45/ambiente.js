function retornaHora(data) {
    // instância de 
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit', // para acrescentar o zero a esquerda
        minute: '2-digit',
        second: '2-digit',
        hour12: false // deixa a hora em formato 24horas
    })

}

try {
    const data = new Date('01-01-1970 12:58:16')
    const hora = retornaHora(11)
    console.log(hora)
} catch(e) {
    // Tratar o erro
    // console.log(e) -> 'TypeError: Esperando a instância de Date.'
} finally {
    console.log('Tenha um bom dia!')
}