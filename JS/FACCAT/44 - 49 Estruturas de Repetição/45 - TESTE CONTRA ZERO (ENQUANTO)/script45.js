// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 45)Reescreva o exercício anterior utilizando a estrutura ENQUANTO. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const numero = parseFloat(document.querySelector('.num1').value);
  let divisor = parseFloat(document.querySelector('.num2').value);
  let resultado;

  while (divisor === 0) {
    alert('O valor do divisor não pode ser zero!');
    divisor = parseFloat(prompt('Insira um novo valor para o divisor:'));
  }

  resultado = numero / divisor;
  result.innerText = `O resultado da divisão é: ${resultado}`;
});