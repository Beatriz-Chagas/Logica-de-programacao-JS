// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Uma fruteira está vendendo frutas com a seguinte tabela de preços:
// Até 5 Kg Acima de 5 Kg
// Morango R$ 2,50 por Kg R$ 2,20 por Kg
// Maçã R$ 1,80 por Kg R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
// ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
// morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const pesoMorango = parseFloat(document.querySelector('.num1').value);
  const pesoMaca = parseFloat(document.querySelector('.num2').value);
  
  let precoMorango = 1.8;
  let precoMaca = 2.5;
  let totalMorango;
  let totalMaca;
  let total;

  if(pesoMorango > 5) {
    totalMorango = (precoMorango - 0.3)  * pesoMorango;
  } else {
    totalMorango = precoMorango * pesoMorango;
  };

  if(pesoMaca > 5) {
    totalMaca = (precoMaca - 0.3) * pesoMaca;
  } else {
    totalMaca = precoMaca * pesoMaca;
  };

  if((totalMorango + totalMaca >  25) || (pesoMorango + pesoMaca > 8)) {
    total = (totalMorango + totalMaca) * 0.9;
  } else {
    total = totalMorango + totalMaca;
  };
  result.innerText = `O valor da compra é: ${total}`;
});