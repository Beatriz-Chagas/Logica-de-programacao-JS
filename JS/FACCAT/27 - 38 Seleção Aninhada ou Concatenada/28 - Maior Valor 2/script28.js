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
  const estoque = parseFloat(document.querySelector('.estoque').value);
  const maxestoque = parseFloat(document.querySelector('.maxestoque').value);
  const minestoque = parseFloat(document.querySelector('.minestoque').value);

  const mediaestoque = (maxestoque + minestoque)/2;

  if (mediaestoque < estoque) {
    result.textContent = `A quantidade média do estoque é: ${mediaestoque}. Não é necessário comprar mais produtos para o estoque. `
  } else {
    result.textContent = `A quantidade média do estoque é: ${mediaestoque}. É necessário comprar mais produtos para o estoque.`
  };

});