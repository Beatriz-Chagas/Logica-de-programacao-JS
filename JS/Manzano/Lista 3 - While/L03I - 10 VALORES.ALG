Algoritmo "L03I - 10 VALORES"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   :   Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
// somatório e a média aritmética dos valores lidos.
// Autor(a)    : Beatriz Chagas
// Data atual  : 09/09/2024

var
   soma, numero, media, contador: real
Inicio
   enquanto contador <11 faca
   escreval ("------------------------------")
   escreval (" 10 VALORES")
   escreval ("------------------------------")

   escreval ("Insira 10 valores para receber a soma e média de todos eles: ")
   leia(numero)
   escreval ("-------------------------------------------------------------")
   limpatela
   soma <- soma + numero
   media <- soma / 10
   
   contador <- contador + 1
   fimenquanto
   
   escreval ("A soma dos 10 valores é: ", soma)
   escreval ("A média aritmética dos 10 valores é: ", media)

Fimalgoritmo