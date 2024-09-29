// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :  Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// até 20 litros, desconto de 3% por litro Álcool
// acima de 20 litros, desconto de 5% por litro
// até 20 litros, desconto de 4% por litro Gasolina
// acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
// seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
// que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const litro = (document.querySelector('.litros').value);
  let valor;
if (litro <= 20  && tipo === 'A') {
   valor = (litro * 2.90) * 0.97;
} else if (litro > 20 && tipo === 'A') {
  valor = (litro * 2.90) * 0.95;
} else if(litro <= 20 && tipo === 'G') {
  valor = (litro * 3.30) * 0.96;
} else if (litro > 20 && tipo === 'G') {
  valor = (litro * 3.30) * 0.94;
} else {
  result.innerText =  'Erro ao calcular o valor';
};

result.innerText = `O valor a ser pago é R$ ${valor.toFixed(2)}`
});