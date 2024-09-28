// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
// minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
// de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(document.querySelector('.num1').value);
  const num2 = Number(document.querySelector('.num2').value);
  let tempo;

  if (num1 >= num2) {

    tempo = 24 - num1 + num2;
    result.innerHTML = `O tempo de jogo foi de ${tempo} horas.`
  } else {
    tempo = num2 - num1;
    result.innerHTML = `O tempo de jogo foi de ${tempo} horas.`
  };

});

