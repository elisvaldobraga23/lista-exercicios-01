// ====================================================================================================================
//                                                       EXERCÍCIOS
// ====================================================================================================================


// Ex01: Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
//       aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
//       ou Reprovado (nota menor que 5).

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex02: Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
//       sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
//       (de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex03: Escreva um programa que pergunte o salário mensal de um funcionário e o
//       percentual de aumento concedido pela empresa. Caso o salário seja menor que
//       R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
//       novo salário do funcionário.

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex04: Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
//       funções prontas como Math.max().

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex05: Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
//       programa que leia o valor total de uma compra e aplique as seguintes regras:
//       compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
//       299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
//       15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
//       valor original, o desconto aplicado e o valor final a pagar.     

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex06: Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
//       deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
//       quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
//       compor o saque.

// const PROMPT = require("prompt-sync")()

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


// |--------------------------------------------------------------------------------------------------------------------|

// Ex: 07: Faça um programa que funcione como uma calculadora básica. Leia dois
//         números e uma operação desejada (+, -, *, /). Usando switch case, realize a
//         operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
//         de operação inválida.

// const PROMPT = require("prompt-sync")()

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

// |--------------------------------------------------------------------------------------------------------------------|

// Ex08: Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
//       tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
//       switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
//       recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.

// const PROMPT = require("prompt-sync")()

// console.log("=================================================")
// console.log("              Faça o seu pedido!")
// console.log("=================================================")

// // Escolhendo o tamanho da pizza
// let tamanhoPizza = PROMPT("Escolha o tamanho da pizza [P, M ou G]: ").toUpperCase()

// // Verificação para o0 tamanho
// if(!["P", "M", "G"].includes(tamanhoPizza)){
//     console.log("Opção inválida, escolha somente P, M ou G!")
// } else{
//     console.log("Tipos de Borda")
//     console.log("acréscimo de R$ 8,00 para borda recheada")
//     console.log("[1] - Tradicional")
//     console.log("[2] - Recheada")

//     // PEgando o tipo [Tradicional ou Recheada]
//     let tipoBorda = PROMPT("Escolha o tipo: ")

//     // Verificação do tipo
//     if(!["1", "2"].includes(tipoBorda)){
//         console.log("-------------------------------------------------")
//         console.log("Opção inválida!")
//         console.log("Digite [1] para Tradicional ou [2] para Recheada")
//     } else{

//         let valorPizza = 0
//         // SWITCH [Tamanho da Pizza]
//         switch(tamanhoPizza){
//             case "P":
//                 valorPizza = 25
//                 tamanhoPizza = "Pequeno"
//                 break
                
//             case "M":
//                 valorPizza = 35
//                 tamanhoPizza = "Média"
//                 break
                    
//             case "G":
//                 valorPizza = 45
//                 tamanhoPizza = "Grande"
//                 break
        
//         }
//         let valorTotalPedido = valorPizza
//         let temBordaRecheada = false
        
//         // SWITCH [Tipo da Borda]
//         switch(tipoBorda){
//             case "1":
//                 tipoBorda = "Tradicional"
//                 break
        
//             case "2":
//                 tipoBorda = "Recheada"
//                 valorTotalPedido += 8
//                 temBordaRecheada = true
//                 break
//         }
        
//         console.log("-------------------------------------------------")
//         console.log("                 Detalhe Pedido")
//         console.log("-------------------------------------------------")
        
//         console.log("Tamanho da Pizza: ", tamanhoPizza)
//         console.log("Tipo de Borda: ", tipoBorda)
//         console.log("Valor Pizza: ", "R$", valorPizza.toFixed(2).replace(".", ","))

//         // Verificação se tem borda recheada ou não
//         if(temBordaRecheada){
//             console.log("Valor Borda Recheada: R$ 8,00")
//             console.log("Total a pagar: ", "R$", valorTotalPedido.toFixed(2).replace(".", ","))
//         }
//     }
// }


// console.log("=================================================")


// |--------------------------------------------------------------------------------------------------------------------|

// Ex09: Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
//       o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
//       pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
//       caso seja.

// const PROMPT = require("prompt-sync")()

// console.log("1 - Jan  | 2 - Fev  | 3 - Mar  | 4 - Abr")
// console.log("5 - Maio | 6 - Jun  | 7 - Jul  | 8 - Ago")
// console.log("9 - Set  | 10 - Out | 11 - Nov | 12 - Dez")
// // Pegando o mês
// let mesNumero = Number(PROMPT("Escolha o mês (1 a 12): "))

// let mesString = ""
// let quantidadeDias = 0
// let bissexto = false

// switch(mesNumero){
//     case 1:
//         mesString = "Janeiro"
//         quantidadeDias = 31
//         break
    
//     case 2:
        
//         mesString = "Fevereiro"

//         let ehBissexto = PROMPT("É Bissexto: [1] - NÃO | [2] - SIM: ")

//         switch(ehBissexto){
//             case "1":
//                 quantidadeDias = 28
//                 break
            
//             case "2":
//                 quantidadeDias = 29
//                 bissexto = true
//                 break

//             default:
//                 console.log("Opção Inválida!")
//                 console.log("Digite [1] para NÃO ou [2] para SIM")
//                 quantidadeDias = 0
//         }
//         break

//     case 3:
//         mesString = "Março"
//         quantidadeDias = 31
//         break

//     case 4:
//         mesString = "Abril"
//         quantidadeDias = 30
//         break

//     case 5:
//         mesString = "Maio"
//         quantidadeDias = 31
//         break

//     case 6:
//         mesString = "Junho"
//         quantidadeDias = 30
//         break

//     case 7:
//         mesString = "Julho"
//         quantidadeDias = 31
//         break

//     case 8:
//         mesString = "Agosto"
//         quantidadeDias = 31
//         break

//     case 9:
//         mesString = "Setembro"
//         quantidadeDias = 30
//         break

//     case 10:
//         mesString = "Outubro"
//         quantidadeDias = 31
//         break

//     case 11:
//         mesString = "Novembro"
//         quantidadeDias = 30
//         break

//     case 12:
//         mesString = "Dezembro"
//         quantidadeDias = 31
//         break


//     default:
//         console.log("Mês inválido! Digite um número entre 1 e 12.")

// }


// if (mesNumero >= 1 && mesNumero <= 12 && quantidadeDias > 0) {
//     if (bissexto) {
//         console.log(`No mês ${mesString} (Ano Bissexto), tem ${quantidadeDias} dias`)
//     } else {
//         console.log(`No mês ${mesString}, tem ${quantidadeDias} dias`)
//     }
// }

// |--------------------------------------------------------------------------------------------------------------------|


// Ex10: Um estacionamento cobra por faixas de tempo. Faça um programa que leia
//       quantas horas um veículo ficou estacionado e, usando switch case com
//       intervalos, calcule o valor a pagar conforme a tabela: 1a hora = R$ 8,00; 2a hora =
//       R$ 6,00; 3a hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
//       R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.

// const PROMPT = require("prompt-sync")()

// console.log("===========================================================")
// console.log("                     Estacionamento")
// console.log("===========================================================")
// console.log("Tabela de Preço")
// console.log("-----------------------------------------------------------")
// console.log("1 hora = R$8,00 | 2 horas = R$6,00 | 3 horas = R$4,00")
// console.log("Mais de 3 horas = R$4,00 pelas primeiras 3 horas")
// console.log("Mais R$2,00 por hora adicional")
// console.log("-----------------------------------------------------------")
// let horaEstacionamento = Number(PROMPT("Digite o tempo de permanência do veiculo (em horas): "))
// let valorPagar = 0
// let valorAdicional = 0

// if(Number.isNaN(horaEstacionamento) ||
//   horaEstacionamento < 0 ||
//   !Number.isInteger(horaEstacionamento)){
//     console.log("valor inválido!")
// } else{
    
//     switch(true){
//         case horaEstacionamento === 1:
//             valorPagar = 8
//             break
    
    
//         case horaEstacionamento === 2:
//             valorPagar = 8 + 6
//             break
    
//         case horaEstacionamento === 3:
//             valorPagar = 8 + 6 + 4
//             break
    
//         case horaEstacionamento > 3 :
//             let horaRestante = horaEstacionamento - 3
//             valorAdicional = horaRestante * 2
//             valorPagar = 4 + valorAdicional
//             break
//     }
    
//     console.log("===========================================================")
//     console.log("Detalhe de Pagamento")
//     console.log("-----------------------------------------------------------")
//     console.log(`Tempo total de permanência: ${horaEstacionamento} h  `)
//     if(horaEstacionamento > 3){
//         console.log(`Valor adicional: ${valorAdicional.toFixed(2).replace(".", ",")}`)
//     }
//     console.log(`Valor total: ${valorPagar.toFixed(2).replace(".", ",")}`)
//     console.log("===========================================================")
// }