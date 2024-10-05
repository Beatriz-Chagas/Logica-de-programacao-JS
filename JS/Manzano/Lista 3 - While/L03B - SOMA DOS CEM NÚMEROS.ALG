Algoritmo "SOMA DOS CEM NÚMEROS"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   : Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)
// Autor(a)    : Beatriz Chagas
// Data atual  : 09/09/2024

var
  contador, somador :inteiro

inicio

   escreval ("-----------------------------")
   escreval (" SOMA DOS CEM NÚMEROS")
   escreval ("-----------------------------")

   contador <- 1
   enquanto contador <101 faca
    somador <- somador + contador
    contador <- contador + 1

   fimenquanto
   escreval ("---------------------------------------------")
   escreval ("A soma dos 100 primeiros números é: ", somador)
   escreval ("---------------------------------------------")

Fimalgoritmo