// =======================================================================
//                               EXERCÍCIOS
// =======================================================================

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

// ----------------------------------------------------------------------------------------------

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
// } else if(idade > 0 && idade <=12){
//         console.log("Você é uma criança!")
//         console.log(idade)
// } else if(idade >= 13 && idade <= 17){
//         console.log("Você é um adolescente!")
//         console.log(idade)
// } else if(idade >= 18 && idade < 60){
//         console.log("Você é um adulto!")
//         console.log(idade)
// }else{
//         console.log("Você é um idoso(a)!")
//         console.log(idade)
// }

// ----------------------------------------------------------------------------------------------

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
// Salário antigo: R$${salario}
// Percentual de Aumento: ${percentualAumento}%
// Valor do aumento: R$${aumento}
// Novo salário: R$${novoValor}
// `)

// ---------------------------------------------------------------------------------------------

// Ex04: Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
//       funções prontas como Math.max().

// const PROMPT = require("prompt-sync")()

// let numero1 = 5
// let numero2 = 10
// let numero3 = 3

// let maior = numero1

// if(numero1 > maior){
//     maior = numero1
// } else if(numero2 > maior){
//     maior = numero2
// } else if(numero3 > maior){
//     maior = numero3
// }

// console.log(maior, "É o número maior!")