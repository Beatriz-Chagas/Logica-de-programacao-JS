// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Santos
// Descrição   : Solicitar ao usúrio valores, realizar o calculo e mostrar o valor da área da forma geométrica.
// Autor(a)    : Beatriz Chagas

// Seleciona o formulário do HTML
const form = document.querySelector('form');

// Seleciona os elementos que irão exibir os resultados dos cálculos
const resultAntecessor = document.querySelector('#antecessor');
const resultSucessor = document.querySelector('#sucessor');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  // Previne o comportamento padrão do formulário (enviar o formulário para o servidor)
  e.preventDefault();

  // Seleciona o valor do campo de input do formulário
  const num1 = Number(document.querySelector('#num1').value);

  // Verifica se o valor inserido é um número
  if (isNaN(num1)) {
    // Se não for um número, exibe uma mensagem de erro
    console.log("Erro: você deve digitar um número inteiro!");
  } else {
    // Se for um número, calcula o antecessor e o sucessor
    let anterior = num1 - 1;
    let sucessor = num1 + 1;

    // Exibe os resultados dos cálculos
    resultAntecessor.innerText = ("O número antecessor é: " + anterior);
  }
});