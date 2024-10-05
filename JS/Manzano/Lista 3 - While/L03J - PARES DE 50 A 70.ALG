Algoritmo "L03J - pares de 50 a 70"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   : Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
// pares situados na faixa numérica de 50 a 70
// Autor(a)    : Beatriz Chagas
// Data atual  : 09/09/2024

var
   soma, media, contador: real
Inicio

   escreval ("------------------------------")
   escreval ("pares de 50 a 70")
   escreval ("-----------------------------")
   contador <- 50

   enquanto contador < 71 faca

      se contador mod 2 = 0 entao
         soma <- soma + contador
         media <- media + 1
      fimse

      contador <- contador + 1
   fimenquanto

   media <- soma / media
   escreval ("--------------------------------------------------")
   escreval ("A soma dos numeros pares entre 50 e 70 é: ", soma )
   escreval ("A media dos numeros pares entre 50 e 70 é: ", media)
Fimalgoritmo