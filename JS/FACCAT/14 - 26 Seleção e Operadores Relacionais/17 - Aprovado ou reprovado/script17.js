// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// aluno é aprovado). Escrever também a média calculada. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nota1 = Number(document.querySelector('.nota1').value);
  const nota2 = Number(document.querySelector('.nota2').value);
 
  const total =  nota1 + nota2 / 2;

  if(total < 6) {
   result.innerHTML = `O aluno foi reprovado. com média  ${total}`
  } else {
   result.innerHTML = `O aluno foi aprovado. com média  ${total}`
  };
 
});

