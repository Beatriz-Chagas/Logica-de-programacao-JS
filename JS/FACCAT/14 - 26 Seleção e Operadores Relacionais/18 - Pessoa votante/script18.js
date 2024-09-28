// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).  
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(document.querySelector('.num1').value);
  const num2 = Number(document.querySelector('.num2').value);
 
  const total =  num1 -  num2;


  if(total < 16) {
   result.innerHTML = `Esta pessoa não poderá votar este ano.`
  }  else {
    result.innerHTML = `Esta pessoa poderá votar este ano.`
  };
 
});

