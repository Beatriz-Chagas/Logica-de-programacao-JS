// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
// média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'. 
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