Algoritmo "L03K - AREA TOTAL DA RESIDENCIA"
// Disciplina  : [Linguagem e L�gica de Programa��o]
// Professor   : Jailson Santos
// Descri��o   : Elaborar um programa que possibilite calcular a �rea total de uma resid�ncia (sala, cozinha, banheiro, quartos, �rea de servi�o, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado c�modo. Em seguida, deve apresentar a �rea do c�modo lido e tamb�m uma mensagem solicitando do usu�rio a confirma��o de continuar calculando novos c�modos. Caso o usu�rio responda �NAO�, o programa deve apresentar o valor total acumulado da �rea residencial.
// Autor(a)    : Beatriz Chagas
// Data atual  : 20/09/2024

var
   largura, comprimento, area, areatotal: real
   contador, comodo: caractere



      console.log ("------------------------------")
      console.log (" AREA TOTAL DA RESIDENCIA")
      console.log ("------------------------------")
      
      while (contador <> "NAO") {
      console.log ("--------------------------------------------------")
      console.log ("Insira o nome, a largura e o comprimento do comodo: ")
      leia(comodo, largura, comprimento)
      area = largura * comprimento
      areatotal = areatotal + area

      console.log ("A �rea total deste comodo �: ", area)
      console.log ("--------------------------------------------------")
      console.log ("Gostaria de inserir um novo comodo? : ")
      leia(contador)
   }

   console.log ("A �rea total desta resid�ncia �: ", areatotal)
   console.log ("--------------------------------------------------")
