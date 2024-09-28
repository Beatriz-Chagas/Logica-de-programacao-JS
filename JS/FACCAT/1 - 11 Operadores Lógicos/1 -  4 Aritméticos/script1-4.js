// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Santos
// Descrição   : Solicitar ao usúrio valores, realizar o calculo e mostrar o resultado das quatro operações aritméticas básicas.
// Autor(a)    : Beatriz Chagas

// Seleciona o formulário do HTML
const form = document.querySelector('form');

// Seleciona os elementos que irão exibir os resultados dos cálculos
const resultSoma = document.querySelector('#soma');
const resultSub = document.querySelector('#subtracao');
const resultMult = document.querySelector('#multiplicacao');
const resultDiv = document.querySelector('#divisao');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  // Previne o comportamento padrão do formulário (enviar o formulário para o servidor)
  e.preventDefault();

  // Seleciona os valores dos campos de input do formulário
  const num1 = parseInt(document.querySelector('.num1').value);
  const num2 = parseInt(document.querySelector('.num2').value);

  // Realiza as operações matemáticas básicas
  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = num1 / num2;

  // Exibe os resultados dos cálculos
  resultSoma.innerText = `O resultado da soma é: ${soma}`;
  resultSub.innerText = `O resultado da subtração é: ${subtracao}`;
  resultMult.innerText = `O resultado da multiplicação é: ${multiplicacao}`;
  resultDiv.innerText = `O resultado da divisão é: ${divisao}`;
});