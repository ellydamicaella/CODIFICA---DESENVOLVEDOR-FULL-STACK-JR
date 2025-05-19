const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número inteiro: "));

if (num % 2 == 0){
    console.log("o numero é par")
} else {
    console.log("o numero é impar")
}
/* ou
let num = parseInt(prompt("Digite um número inteiro: "));
console.log(num % 2 === 0 ? "Par" : "Ímpar");*/