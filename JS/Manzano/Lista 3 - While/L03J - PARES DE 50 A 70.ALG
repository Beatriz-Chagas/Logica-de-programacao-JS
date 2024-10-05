Algoritmo "L03J - pares de 50 a 70"
// Disciplina  : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Santos
// Descri��o   : Elaborar um programa que apresente os resultados da soma e da m�dia aritm�tica dos valores
// pares situados na faixa num�rica de 50 a 70
// Autor(a)    : Beatriz Chagas
// Data atual  : 09/09/2024

var
   soma, media, contador: real


   console.log ("------------------------------")
   console.log ("pares de 50 a 70")
   console.log ("-----------------------------")
   contador = 50

   while contador < 71 {

      se contador mod 2 = 0 entao
         soma = soma + contador
         media = media + 1
      fimse

      contador = contador + 1
   }

   media = soma / media
   console.log ("--------------------------------------------------")
   console.log ("A soma dos numeros pares entre 50 e 70 �: ", soma )
   console.log ("A media dos numeros pares entre 50 e 70 �: ", media)
