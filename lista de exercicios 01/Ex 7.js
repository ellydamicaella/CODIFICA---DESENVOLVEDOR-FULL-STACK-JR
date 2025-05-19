const prompt = require('prompt-sync')()

let quantMacas = parseFloat(prompt("Quantas maças vc comprou? "))


if (quantMacas < 12){
    console.log(quantMacas * 0.30)
} else {
    console.log(quantMacas * 0.25)
}