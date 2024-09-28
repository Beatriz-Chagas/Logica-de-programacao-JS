// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Ler um valor e escrever se é positivo, negativo ou zero. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  const numero = parseFloat(document.querySelector('.num').value);


  if (numero > 0) {
    result.textContent = ` O número ${numero} é positivo.`
  } else if (numero < 0){
    result.textContent = `  O número ${numero} é negativo.`
  } else {
    result.textContent = `  O número ${numero} é zero.`
  }

});