// Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
// pares situados na faixa numérica de 50 a 70. 

  let soma = 0, media, contador = 0;

   contador = 50

   while (contador < 70) {

      if(contador % 2 == 0) {
         soma += contador
      
      };

      contador++
   };

   media = soma / contador
   console.log ("--------------------------------------------------")
   console.log ("A soma dos numeros pares entre 50 e 70 é: ", soma )
   console.log ("A media dos numeros pares entre 50 e 70 é: ", media)
