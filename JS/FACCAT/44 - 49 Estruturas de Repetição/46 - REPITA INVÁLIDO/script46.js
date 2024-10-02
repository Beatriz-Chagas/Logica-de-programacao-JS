// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 46)Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor informado seja ZERO. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const numero = parseFloat(document.querySelector('.num1').value);
  let divisor = parseFloat(document.querySelector('.num2').value);
  let resultado;

  if (divisor === 0) {
    do {
      alert('O valor do divisor não pode ser zero!');
      divisor = parseFloat(prompt('Insira um novo valor para o divisor:'));
    } while (divisor === 0);
  }

  if (divisor === 0) {
    result.innerText = 'Erro: não é possível dividir por zero!';
  } else {
    resultado = numero / divisor;
    result.innerText = `O resultado da divisão é: ${resultado}`;
  }
});