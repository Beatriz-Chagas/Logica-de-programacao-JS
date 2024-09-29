// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :   Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const valorX = parseFloat(document.querySelector('.num1').value);
  const valorY = parseFloat(document.querySelector('.num2').value);
  let resposta;
const valorZ =  valorX * valorY - 5;


if(valorZ < 0){
  resposta = 'A'
  }else if(valorZ <100){
    resposta = 'B'
} else {
  resposta = 'C'
};


const table = document.createElement('table');
table.border = '1';

const headerRow = document.createElement('tr');
headerRow.innerHTML = `
  <th>X</th>
  <th>Y</th>
  <th>Z</th>
  <th>Resposta</th>
`;
table.appendChild(headerRow);

const testData = [
  [3, 2, 11, 'B'],
  [150, 3, 455, 'C'],
  [7, -1, -2, 'A'],
  [-2, 5, -5, 'A'],
  [50, 3, 155, 'C'],
];

testData.forEach((data) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data[0]}</td>
    <td>${data[1]}</td>
    <td>${data[2]}</td>
    <td>${data[3]}</td>
  `;
  table.appendChild(row);
});

result.innerText = `Para o valor Z: ${valorZ} a resposta é: ${resposta}`;  
result.appendChild(table);
});