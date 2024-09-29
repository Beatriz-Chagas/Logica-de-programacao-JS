// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  const numero1 = parseFloat(document.querySelector('.num1').value);
  const numero2 = parseFloat(document.querySelector('.num2').value);
  const numero3 = parseFloat(document.querySelector('.num3').value);

  const numeros = [ numero1, numero2, numero3];

  Math.min(numeros);

  result.innerText = `Os números em ordem crescente é: ${numeros}`;

});