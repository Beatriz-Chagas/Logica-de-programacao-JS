// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o : Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num = Number(document.querySelector('.num').value);

  if (num < 0) {
    result.textContent = `O número ${num} é negativo.`
  } else if (num === 0) {
    result.textContent = `O número ${num} é neutro, nulo.`
  } else {
    result.textContent = `O número ${num} é positivo.`
  };
});

