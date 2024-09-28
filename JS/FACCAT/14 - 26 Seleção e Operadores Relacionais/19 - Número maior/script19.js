// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : ) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(document.querySelector('.num1').value);
  const num2 = Number(document.querySelector('.num2').value);

  if(num1 > num2) {
    result.textContent = `O maior número é ${num1}`
  } else  {
    result.textContent = `O maior número é ${num2}`
  }

 
});

