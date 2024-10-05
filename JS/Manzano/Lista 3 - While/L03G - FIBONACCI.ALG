Algoritmo "L03G - FIBONACCI"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   :  Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
// Autor(a)    : Beatriz Chagas
// Data atual  : 20/09/2024

var
   fibo, numeroant, contador, aux : inteiro

Inicio

   escreval ("------------------------------")
   escreval (" FIBONACCI ")
   escreval ("------------------------------")
   fibo <- 1
   numeroant <- 0
   enquanto  contador <15 faca
      escreval(fibo)
      aux <- fibo
      fibo <- fibo + numeroant
      numeroant <- aux
      
      contador <- contador + 1
   fimenquanto

Fimalgoritmo