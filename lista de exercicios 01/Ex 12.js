const prompt = require('prompt-sync')()

const tabuada = parseInt(prompt("Digite um número para ver a tabuada: "))
for (let i = 1; i <= 10; i++) {
    console.log(tabuada, " x ", i)
}