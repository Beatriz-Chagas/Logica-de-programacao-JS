// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o : 44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
// um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
// da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).
// Autor(a) : Beatriz Chagas

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
      divisor = prompt(parseFloat('Insira um novo valor para o divisor:').value)
      
    } while (divisor === 0);
  }

  resultado = numero / divisor;
  result.innerText = `O resultado da divisão é: ${resultado}`;
});