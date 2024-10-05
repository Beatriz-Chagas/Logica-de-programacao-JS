// Descri��o   :  Elaborar um programa que apresente no final o somat�rio dos valores pares existentes na faixa de

   let contador = 1;
   let soma = 0;

   while (contador < 501) {
      contador++
      if (contador % 2 == 0) {
         soma += contador
   }
}
      console.log (" O somatório dos valores pares entre 1 e 500 é: ", soma);
