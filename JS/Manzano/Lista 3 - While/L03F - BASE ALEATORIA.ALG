Algoritmo "L03F - BASE ALEATORIA"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   :  Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
// Autor(a)    : Beatriz Chagas
// Data atual  : 20/09/2024

var
   basequalquer, expoente, contador, base: real

Inicio

   escreval ("------------------------------")
   escreval (" BASE ALEATORIA")
   escreval ("------------------------------")

   escreval (" Insira um valor para base e um valor para o exponente da potenciação: ")
   leia(basequalquer, expoente)
   escreval ("------------------------------")

   base <- basequalquer

   enquanto contador < expoente faca
      base <- basequalquer * base

      se contador = 0 entao
         base <- base /base
         escreval (contador ," ^ ",expoente," = ", base)
         base <- basequalquer
      fimse

      contador <- contador + 1
      escreval ("------------------------------")
      escreval (contador ," ^ ",expoente," = ", base)

   fimenquanto

Fimalgoritmo