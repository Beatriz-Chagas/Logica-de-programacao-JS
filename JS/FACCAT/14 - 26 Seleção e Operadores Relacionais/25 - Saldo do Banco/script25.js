// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// // Descri��o  : Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  const debito = parseFloat(document.querySelector('.debito').value);
  const saldo = parseFloat(document.querySelector('.saldo').value);
  const credito = parseFloat(document.querySelector('.credito').value);
  const conta = document.querySelector('.conta').value;

  const saldoatual =  saldo - debito + credito;

  if (saldoatual > 0) {
    result.textContent = `Saldo da conta ${conta} está Positivo: ${saldoatual}`
  } else {
    result.textContent = `Saldo da conta  ${conta} está Negativo: ${saldoatual}`
  };

});