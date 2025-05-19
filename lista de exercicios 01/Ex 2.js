const prompt = require('prompt-sync')();

let idade = parseInt(prompt("digite sua idade: "));

if (idade  <= 12) {
    console.log("vc é uma criança");
} else if (idade > 12 && idade <=17){
    console.log("vc é um adolescente")
} else if ( idade > 17 && idade <= 64 ){
        console.log("vc é um adulto")
} else {
        console.log("voce é um idoso")
}
/* ou
let idade = parseInt(prompt("Digite sua idade: "));

console.log(
    idade <= 12
        ? "Você é uma criança"
        : idade <= 17
        ? "Você é um adolescente"
        : idade < 64
        ? "Você é um adulto"
        : "Você é um idoso"
);
*/
