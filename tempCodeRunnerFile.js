const PROMPT = require("prompt-sync")()

let numero1 = Number(PROMPT("Digite 1º número: "))
let numero2 = Number(PROMPT("Digite 2º número: "))
let numero3 = Number(PROMPT("Digite 3º número: "))

let maior = numero1

if(numero2 > maior){
    maior = numero2
}

if(numero3 > maior){
    maior = numero3
}

console.log(maior, "É o número maior!")