const prompt = require('prompt-sync')()
let num = prompt("digite um numero: ")
let cont = 0;
while (cont < 10){
    console.log(num)
    cont ++
}
/* ou
let repetir = prompt("Digite um número: "));
for (let i = 0; i < 10; i++) console.log(repetir);*/