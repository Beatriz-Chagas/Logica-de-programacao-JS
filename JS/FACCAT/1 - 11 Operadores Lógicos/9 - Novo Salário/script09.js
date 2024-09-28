// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Solicitar ao us�rio que insira tr�s valores, realizar o calculo e mostrar o valor total de pessoas que votaram.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const salario = Number(document.querySelector('#salario').value);
  const aumento = Number(document.querySelector('#aumento').value);

  const total = salario + (salario  * aumento / 100);



  result.innerText = ` O novo sálario a ser pago é: ${total}`;
});