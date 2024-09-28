// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(document.querySelector('.num1').value);
  const num2 = Number(document.querySelector('.num2').value);

  const nums = [num1, num2];
  nums.sort((a, b) => a - b);
  result.textContent = `A ordem crescente é: ${nums[0]} e ${nums[1]};`

 
});

