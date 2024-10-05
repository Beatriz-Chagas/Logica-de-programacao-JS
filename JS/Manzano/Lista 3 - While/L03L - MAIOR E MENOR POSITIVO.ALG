Algoritmo "L03L - Maior e menor positivo"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   : Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
// seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
// Autor(a)    : Beatriz Chagas
// Data atual  : 21/09/2024

var
   maior, menor, numero: inteiro

Inicio


      escreval ("------------------------------")
      escreval (" Maior e menor positivo")
      escreval ("------------------------------")
      menor <- 100000000
      enquanto numero >-1 faca
      escreval ("--------------------------------------------------")
      escreval ("Insira um valor inteiro: ")
      leia(numero)

       se numero < menor entao
       menor <- numero
       senao
       se numero > maior entao
       maior <- numero
       fimse
       fimse
       
   fimenquanto
   
   escreval ("------------------------------------------------------")
   escreval ("O maior numero inteiro informado foi: ", maior)
   escreval ("O menor numero inteiro informado foi: ", menor)
   escreval ("------------------------------------------------------")
Fimalgoritmo