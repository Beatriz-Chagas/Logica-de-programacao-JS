// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 42)Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
// estar em condições, um dos seguintes requisitos deve ser satisfeito:
// - Ter no mínimo 65 anos de idade.
// - Ter trabalhado no mínimo 30 anos.
// - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
// de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
// de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
// senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
const senhaInput = document.querySelector('.num2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const idade = parseFloat(document.querySelector('.num1').value);
  const tempoTrabalho = parseFloat(document.querySelector('.num2').value);

  if  (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 &&  tempoTrabalho >= 25)) {
    result.innerHTML = 'Requerer aposentadoria';
  } else {
    result.innerHTML = 'Não requerer aposentadoria';
  }

});

