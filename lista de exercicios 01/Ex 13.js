const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;

do {
    numero = parseFloat(prompt("Digite um número decimal (0 para sair): "));
    
    if (numero !== 0) {
        soma += numero;
        quantidade++;
    }

} while (numero !== 0);

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log(`A média dos números digitados é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi digitado.");
}
