
// Descri��o   : Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
// somatório e a média aritmética dos valores lidos.   

let result = document.querySelector('.result');
let soma = 0, numero, media, contador = 0;

   while (contador <10) {
  console.log(contador)
   numero = parseInt(prompt("Insira 10 valores para receber a soma e média de todos eles: "))
   soma += numero;
   media = soma / 10;
   
   contador++;
   }
   
   result.innerText = `A soma dos 10 valores é: ${soma} \n
   A média aritmética dos 10 valores é: ${media}`

 
   