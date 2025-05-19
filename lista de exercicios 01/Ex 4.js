const prompt = require('prompt-sync')()

console.log ("\n1. Opcao - Olá, como posso ajudar? \n2. opcao - Data atual\n3. opcao - sair")

let opcao = parseInt(prompt("digite a opção desejada: "));

switch(opcao){

case 1:
    console.log("1. Opcao - Olá, como posso ajudar?");
    break

case 2:
    console.log("2. opcao - Data atual", new Date());
    break

case 3: 
    console.log("3. opcao - sair");
    break

default: console.log("Opcao Invalida");

}