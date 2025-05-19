const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro positivo: "));

if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.");
} else {
    let fatorial = 1;
    let i = 1;

    while (i <= numero) {
        fatorial *= i;
        i++;
    }

    console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
