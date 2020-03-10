function numFeliz(num = 0, contador = 0) {
    resultado = 'é um número triste'
    if (typeof num != 'number') 
        return resultado = 'não é um número'
   
    if (contador < 15 && num > 0) {
        let numeros = num.toString().split('').map(n => n * n)
        let soma = numeros.reduce((a, b) => a + b, 0)

        if (soma === 1) {
            return resultado = 'é um número feliz'
        } else {
            contador++
            numFeliz(soma, contador)
        }
    } 
    return resultado
}

if (typeof module != 'undefined') 
    module.exports = numFeliz 

