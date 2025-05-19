const prompt = require('prompt-sync')()

let nota = parseFloat(prompt("Digite sua nota( 0 a 10): "))

if (nota == 6){
    console.log("vc tá de recuperação")
} else if (nota > 6){
    console.log("vc tá aprovado")
} else {
    console.log("vc foi reprovado")
}
/* ou
let nota = parseFloat(prompt("Digite a nota (0 a 10): "));
if (nota >= 7) console.log("Aprovado");
else if (nota >= 6) console.log("Recuperação");
else console.log("Reprovado");
*/