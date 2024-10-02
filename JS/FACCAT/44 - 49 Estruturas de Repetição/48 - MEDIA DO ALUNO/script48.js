// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 48) Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a
// média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
const nota1Input = document.querySelector('.nota1');
const nota2Input = document.querySelector('.nota2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nota1 = Number(nota1Input.value);
  let nota2 = Number(nota2Input.value);

  if (nota1 < 0 || nota1 > 10) {
    result.innerText = 'Nota 1 inválida';
    nota1Input.focus();
    return;
  }
  
  nota2Input.style.display = 'block';
  if (nota2 < 0 || nota2 > 10) {
    result.innerText = 'Nota 2 inválida';
    nota2Input.focus();
    return;
    
  }
if  (nota1 > 0 && nota1 < 10 && nota2 > 0 && nota2 < 10) {
  const total = (nota1 + nota2) / 2;
  result.innerText = `A média final deste aluno(a) é: ${total}`;
}
});