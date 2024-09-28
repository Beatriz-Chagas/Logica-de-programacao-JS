// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fahren = Number(document.querySelector('#fahren').value);
 
  const total =  (fahren - 32) * (5/9);


  result.innerText = ` 
 A conversão deste valor para Celcius é: ${total} °C
 
  `;
});

