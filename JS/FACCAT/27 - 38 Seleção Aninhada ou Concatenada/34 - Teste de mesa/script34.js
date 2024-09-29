// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  :  Seja o seguinte algoritmo:
// início
// ler x
// ler y
// z  (x*y) + 5
// se z <= 0 então
// resposta  ‘A’
// senão
// se z <= 100 então
// resposta  ‘B’
// senão
// resposta  ‘C’
//  fim_se
//  fim_se
// escrever z, resposta
// fim
// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:
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