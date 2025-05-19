const prompt = require('prompt-sync')()

let num1 = parseFloat(prompt("digite um numero: "));
let num2 =parseFloat(prompt("digite outro numero: "));

if( num1 < num2){
    console.log(num1, num2)
}else{
    console.log(num2, num1)
}
