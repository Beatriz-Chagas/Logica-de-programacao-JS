// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Escrever um algoritmo que leia o n�mero de carros por ele vendidos, 
// o valor total de suas vendas, o sal�rio fixo e o valor que ele recebe por carro vendido. 
// Calcule e escreva o sal�rio final do vendedor.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const carros = Number(document.querySelector('#carros').value);
  const vendatotal = Number(document.querySelector('#vendatotal').value);
  const salariofixo = Number(document.querySelector('#salariofixo').value);
  const comissaofixa = Number(document.querySelector('#comissaofixa').value);


  const total = salariofixo + (carros * comissaofixa) +  (vendatotal * 0.05);

  result.innerText = ` 
  O sálario final do vendedor é: R$ ${total}
 
  `;
});

