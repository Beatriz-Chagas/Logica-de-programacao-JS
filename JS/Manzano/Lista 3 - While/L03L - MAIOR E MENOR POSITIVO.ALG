Algoritmo "L03L - Maior e menor positivo"
// Disciplina  : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Santos
// Descri��o   : Elaborar um programa que efetue a leitura de valores positivos inteiros at� que um valor negativo
// seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usu�rio.
// Autor(a)    : Beatriz Chagas
// Data atual  : 21/09/2024

var
   maior, menor, numero: inteiro




      console.log ("------------------------------")
      console.log (" Maior e menor positivo")
      console.log ("------------------------------")
      menor = 100000000
      while numero >-1 {
      console.log ("--------------------------------------------------")
      console.log ("Insira um valor inteiro: ")
      leia(numero)

       se numero < menor entao
       menor = numero
       senao
       se numero > maior entao
       maior = numero
       fimse
       fimse
       
   }
   
   console.log ("------------------------------------------------------")
   console.log ("O maior numero inteiro informado foi: ", maior)
   console.log ("O menor numero inteiro informado foi: ", menor)
   console.log ("------------------------------------------------------")
