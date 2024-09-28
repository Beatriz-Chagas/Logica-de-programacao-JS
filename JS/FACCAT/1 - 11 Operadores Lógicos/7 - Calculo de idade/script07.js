// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Solicitar ao us�rio que insira tr�s valores, realizar o calculo e mostrar o valor da idade em dias.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario'); // Adicione um ID ao formulário
const resultDias = document.querySelector('.result'); // Adicione a tag de fechamento do elemento

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const dia = Number(document.querySelector('#dias').value);
  const mes = Number(document.querySelector('#meses').value);
  const ano = Number(document.querySelector('#anos').value);

  const anoEmDias = ano * 365;
  const mesEmDias = mes * 30;
  const anosEmDias = dia + mesEmDias + anoEmDias;

  resultDias.innerText = `A idade em dias é: ${anosEmDias}`;
  return false; 
});

