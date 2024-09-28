// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o : As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
let total;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num = Number(document.querySelector('.num').value);
  

  if (num < 12) {
     total = num * 1.30;
  } else {
     total = num * 1.00; 
  };
  result.innerHTML = `O valor total da compra é R$ ${total.toFixed(2)}`
});