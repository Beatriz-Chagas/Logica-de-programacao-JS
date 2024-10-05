Algoritmo "L03D - IMPARES DE 0 A 20"
// Disciplina  : [Linguagem e Lógica de Programação]
// Professor   : Jailson Santos
// Descrição   : Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
// se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
// se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
// Autor(a)    : Beatriz Chagas
// Data atual  : 09/09/2024

var
      contador: inteiro
      
Inicio

   escreval ("------------------------------")
   escreval (" IMPARES DE 0 A 20")
   escreval ("------------------------------")

   enquanto contador < 20 faca
      contador <- contador + 1

       se contador mod 2  <> 0 entao
      escreval(contador)
      fimse
   fimenquanto

Fimalgoritmo