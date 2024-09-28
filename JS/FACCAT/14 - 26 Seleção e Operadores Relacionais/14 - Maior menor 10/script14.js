// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o : Faça um algoritmo que leia um número e diga se é maior ou menor ou igual a que 10
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num = Number(document.querySelector('.num').value);
 
if  ( num > 10) {
  result.textContent = `O número ${num} é maior que 10.`
} else if (num < 10) {
result.innerText = ` O numero ${num} é menor que dez`;
}  else {
  result.innerText = `O número ${num} é igual a 10.`
};  
});

