// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :   Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const numero1 = parseFloat(document.querySelector('.num1').value);
  const numero2 = parseFloat(document.querySelector('.num2').value);


  if (numero1 > numero2) {
    result.innerText = `O  primeiro número é maior que o segundo.`
  } else if (numero1 < numero2) {
    result.innerText = `O segundo número é maior que o primeiro.`
  } else {
    result.innerText = `Os números são iguais.`

  };

});