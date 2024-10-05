// Elaborar um programa que apresente como resultado o valor de uma potência de uma base
// qualquer elevada a um expoente qualquer, ou seja, de BE
// , em que B é o valor da base e E o valor
// do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
// portuguol (^). 

let result = document.querySelector('.result');
const base = parseInt(prompt("Insira um valor para a base da potenciação: "));
const expoente = parseInt(prompt("Insira um valor para o expoente da potenciação: "));


  let tabela = ""; 
  let contador = 0;
  let potencia = 1; 
  while (contador < expoente) {
    if (contador == 0) {
  tabela += `${base} ^ ${contador} = ${potencia}\n`;
}
    potencia *= base; 
    tabela += `${base} ^ ${contador + 1} = ${potencia}\n`;
    contador++;
  }

  result.innerText = tabela;
