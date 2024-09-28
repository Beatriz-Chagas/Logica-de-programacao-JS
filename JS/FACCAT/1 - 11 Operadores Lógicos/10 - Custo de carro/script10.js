// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Solicitar ao us�rio que insira tr�s valores, realizar o calculo e mostrar o valor total de pessoas que votaram.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
  const custo = Number(document.querySelector('#custo').value);

  const revendedor =  25 * custo / 100;
  const imposto  = 45 * custo / 100;
  const total = custo + revendedor + imposto;

  result.innerText = ` 
  O custo final do carro após todos os calculos é: R$ ${total}
  O valor dos impostos é: R$ ${imposto}
  O valor da porcentagem do revendedor é: R$ ${revendedor}
  `;
});