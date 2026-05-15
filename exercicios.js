const PROMPT = require("prompt-sync")()

// =======================================================================
//                               EXERCÍCIOS
// =======================================================================

// Ex01: Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
//       aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
//       ou Reprovado (nota menor que 5).

// let nota = Number(PROMPT("Informe sua nota (de 0 a 10): "))

// if(nota < 0 || nota > 10 || Number.isNaN(nota)){
//     console.log("Por favor, informe uma nota entre 0 a 10")
// } else if(nota >= 7){
//     console.log("O aluno está: APROVADO!")
// } else if(nota >= 5){
//     console.log("O aluno está: EM RECUPERAÇÃO!")
// } else {
//     console.log("O aluno está: REPROVADO!")
// }

// ----------------------------------------------------------------------------------------------

// Ex02: Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
//       sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
//       (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).

// let anoNascimento = Number(PROMPT("Informe o ano do seu nascimento (com 4 dígitos): "))
// let anoAtual = new Date().getFullYear()
// let idade = anoAtual - anoNascimento

// if( Number.isNaN(anoNascimento)){
//     console.log("Erro! Informe apenas números")

// } else if(String(anoNascimento).length !== 4){
//     console.log("Ano de nascimento invalido, informe um ano de nascimento com 4 dígitos!")

// } else if(anoNascimento > anoAtual){
//     console.log("Ano de nascimento inválido!")

// } else if(idade > 0 && idade <=12){
//     console.log("Você tem", idade, "anos")
//         console.log("Você é uma criança!")

// } else if(idade <= 17){
//     console.log("Você tem", idade, "anos")
//         console.log("Você é um adolescente!")

// } else if(idade >= 18 && idade < 60){
//     console.log("Você tem", idade, "anos")
//         console.log("Você é um adulto!")

// }else{
//     console.log("Você tem", idade, "anos")
//         console.log("Você é um idoso(a)!")
// }

// ----------------------------------------------------------------------------------------------

// Ex03: Escreva um programa que pergunte o salário mensal de um funcionário e o
//       percentual de aumento concedido pela empresa. Caso o salário seja menor que
//       R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
//       novo salário do funcionário.

// let salario = Number(PROMPT("Informe o salário atual do funcionário: "))
// let percentualAumento = Number(PROMPT("Informe o percentual de Aumento: "))

// if(salario < 1500){
//     percentualAumento *= 2
// }

// let aumento = salario * percentualAumento / 100
// let novoValor = salario + aumento

// console.log(`
// Salário antigo: R$${salario.toFixed(2).replace(".", ",")}
// Percentual de Aumento: ${percentualAumento}%
// Valor do aumento: R$${aumento.toFixed(2).replace(".", ",")}
// Novo salário: R$${novoValor.toFixed(2).replace(".", ",")}
// `)

// ---------------------------------------------------------------------------------------------

// Ex04: Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
//       funções prontas como Math.max().

// let numero1 = Number(PROMPT("Digite 1º número: "))
// let numero2 = Number(PROMPT("Digite 2º número: "))
// let numero3 = Number(PROMPT("Digite 3º número: "))

// let maior = numero1

// if(numero2 > maior){
//     maior = numero2
// }

// if(numero3 > maior){
//     maior = numero3
// }

// console.log(maior, "É o número maior!")

// ---------------------------------------------------------------------------------------------

// Ex05: Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
//       programa que leia o valor total de uma compra e aplique as seguintes regras:
//       compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
//       299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
//       15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
//       valor original, o desconto aplicado e o valor final a pagar.     

// let valorTotal = Number(PROMPT("Valor total da Compra: "))
// let desconto = 0

// if(!Number.isNaN(valorTotal) && valorTotal > 0){
//     if(valorTotal >= 100 && valorTotal < 300){
//         desconto = valorTotal * 10 / 100
//     } else if (valorTotal >= 300 && valorTotal < 500){
//         desconto = valorTotal * 15 / 100
//     } else if(valorTotal >= 500){
//         desconto = valorTotal * 20 / 100
//     }
    
//     let valorPagar = valorTotal - desconto
    
//     console.log("=======================================")
    
//     console.log(`Valor total: R$${valorTotal.toFixed(2).replace(".", ",")}`)
//     if(desconto === 0 ){
//         console.log(`Sem Desconto`)
//     } else{
//         console.log(`Desconto Aplicado: R$${desconto.toFixed(2).replace(".", ",")}`)
//     }
//     console.log(`Valor a Pagar: R$${valorPagar.toFixed(2).replace(".", ",")}`)
    
//     console.log("=======================================")
    
// } else{
//     console.log("Valor Inválido!")
// }

// ---------------------------------------------------------------------------------------------

// Ex06: Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
//       deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
//       quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
//       compor o saque.

// let valorSaque = Number(PROMPT("Informe o valor que deseja sacar: "))
// let quantia = valorSaque

// if(!Number.isNaN(valorSaque) && valorSaque % 10 === 0 && valorSaque > 0){
//     let cedula100 = Math.floor(quantia / 100)
//     quantia = quantia % 100
    
//     let cedula50 = Math.floor(quantia / 50)
//     quantia = quantia % 50
    
//     let cedula20 = Math.floor(quantia / 20)
//     quantia = quantia % 20
    
//     let cedula10 = Math.floor(quantia / 10)
//     quantia = quantia % 10
    
//     console.log("===========================================")

//     console.log(`Resumo do saque de R$${valorSaque.toFixed(2).replace(".", ",")}`)

//     console.log("-------------------------------------------")

//     if(cedula100 > 0){
//         console.log(`${cedula100} ${cedula100 === 1 ? "cédula" : "cédulas"} de R$100,00`)
//     }

//     if(cedula50 > 0){
//         console.log(`${cedula50} ${cedula50 === 1 ? "cédula" : "cédulas"} de R$50,00`)
//     }

//     if(cedula20 > 0){
//         console.log(`${cedula20} ${cedula20 === 1 ? "cédula" : "cédulas"} de R$20,00`)
//     }

//     if(cedula10 > 0){
//         console.log(`${cedula10} ${cedula10 === 1 ? "cédula" : "cédulas"} de R$10,00`)
//     }

//     console.log("===========================================")

// } else{
//     console.log("Valor inválido, Informe apenas valores positivos e múltiplos de 10!")
// }


// ---------------------------------------------------------------------------------------------

// Ex: 07: Faça um programa que funcione como uma calculadora básica. Leia dois
//         números e uma operação desejada (+, -, *, /). Usando switch case, realize a
//         operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
//         de operação inválida.
// console.log("====================================")
// console.log("            CALCULADORA")
// console.log("====================================")

// // Pegando o 2º número
// let numero1 = Number(PROMPT("1º Número: "))

// // Validação do 1º número
// if(Number.isNaN(numero1)){
//     console.log("------------------------------------")

//     console.log("Valor inválido!")

//     console.log("------------------------------------")
// } else {
//     // Pegando o 2º número
//     let numero2 = Number(PROMPT("2º Número: "))

//     // Validação do 2º número
//     if(Number.isNaN(numero2)){
//         console.log("------------------------------------")

//         console.log("Valor inválido!")

//         console.log("------------------------------------")
//     } else{
//         // Solicitando a operação
//         let operacao = PROMPT("Escolha a operação [ +, -, *, /]: ")

//         // Verificar se a operação é válida
//         if (!["+", "-", "*", "/"].includes(operacao)){
//             console.log("------------------------------------")

//             console.log("Operação inválida!")

//         } else{
//             console.log("------------------------------------")
            
            
//                 switch(operacao){
//                     case "+":
//                         console.log(numero1, "+", numero2, "=", numero1 + numero2)
//                         break
                    
//                     case "-": 
//                         console.log(numero1, "-", numero2, "=", numero1 - numero2)
//                         break
            
//                     case "*":
//                         console.log(numero1, "x", numero2, "=", numero1 * numero2)
//                         break
                    
//                     case "/":
//                         if(numero2 === 0){
//                             console.log("Não é possível dividir por 0!")
            
//                         } else {
//                             console.log(numero1, "/", numero2, "=", numero1 / numero2)
                            
//                         }
//                         break
//                 }
            
//             }
            
//             console.log("------------------------------------")

//         }

//     }

// ---------------------------------------------------------------------------------------------

// Ex08: Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
//       tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
//       switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
//       recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.


console.log("=================================================")
console.log("              Faça o seu pedido!")
console.log("=================================================")
let tamanhoPizza = PROMPT("Escolha o tamanho da pizza [P, M ou G]: ").toUpperCase()
console.log("-------------------------------------------------")

console.log("Tipos de Borda")
console.log("[1] - Tradicional")
console.log("[2] - Recheada")
let tipoBorda = PROMPT("Escolha o tipo: ")

let valorPizza = 0

let valorTotalPedido = 0

switch(tamanhoPizza){
    case "P":
        valorPizza = 25
        tamanhoPizza = "Pequeno"
        break
        
    case "M":
        valorPizza = 35
        tamanhoPizza = "Média"
        break
            
    case "G":
        valorPizza = 45
        tamanhoPizza = "Grande"
        break

}

switch(tipoBorda){
    case "1":
        tipoBorda = "Tradicional"
        break

    case "2":
        tipoBorda = "Recheada"
        valorTotalPedido = valorPizza + 8
}

console.log("-------------------------------------------------")
console.log("                 Detalhe Pedido")
console.log("-------------------------------------------------")

console.log("Tamanho da Pizza: ", tamanhoPizza)
console.log("Tipo de Borda: ", tipoBorda)
console.log("Valor Pizza: ", valorPizza.toFixed(2).replace(".", ","))
if(valorTotalPedido > 0){
    console.log("Valor com Borda: ", valorTotalPedido.toFixed(2).replace(".", ","))
}

console.log("=================================================")