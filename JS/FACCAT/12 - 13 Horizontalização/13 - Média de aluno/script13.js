// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Fa�a um algoritmo que leia tr�s notas de um aluno, calcule e escreva a m�dia final deste aluno.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nota1 = Number(document.querySelector('.nota1').value);
  const nota2 = Number(document.querySelector('.nota2').value);
  const nota3 = Number(document.querySelector('.nota3').value);
 
  const total = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10 ;


  result.innerText = ` 
 A média final deste aluno(a) é: ${total}
 
  `;
});

