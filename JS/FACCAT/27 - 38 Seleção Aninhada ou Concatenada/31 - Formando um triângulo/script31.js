// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :  Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

function existeTriangulo(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  const a = parseFloat(document.querySelector('.num1').value);
  const b = parseFloat(document.querySelector('.num2').value);
  const c = parseFloat(document.querySelector('.num3').value);

  if (existeTriangulo(a, b, c)) {
    result.innerText = `Os lados ${a}, ${b} e ${c} formam um triângulo.`;
  } else {
    result.innerText = `Os lados ${a}, ${b} e ${c} não formam um triângulo.`;
  }
});