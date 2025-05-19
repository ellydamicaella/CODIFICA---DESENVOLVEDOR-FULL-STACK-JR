const prompt = require('prompt-sync')()

let soma = 0

for( i= 0; i < 5; i++ ){
    let num = parseFloat(prompt(`Digite o ${i + 1}º número: `))
    soma += num
}
console.log(soma)