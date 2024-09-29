// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :  Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
// do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const a = parseFloat(document.querySelector('.num1').value);
  const b = parseFloat(document.querySelector('.num2').value);
  const time1 = (document.querySelector('.time1').value);
  const time2 = (document.querySelector('.time2').value);
  let diferenca = 0;
 if (a > b) {
  diferenca = a - b;
  result.innerText = `O time ${time1} venceu por ${diferenca} gols.`
  } else if (b > a) {
    diferenca = b - a;
    result.innerText = `O time ${time2} venceu por ${diferenca}`
      } else {
      result.innerText = `Os times empataram com ${a} gols para ambos.`;
 }
});