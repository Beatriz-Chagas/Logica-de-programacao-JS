// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 43)43) Seja o seguinte algoritmo:
// 
// ler a, b, c
// se (a < b+c) e (b <a+c) e (c <a+b) então
// se (a=b) e (b=c) então
// mens  'Triângulo Equilátero'
// senão
// se (a=b) ou (b=c) ou (a=c) então
// mens  'Triângulo Isósceles'
// senão
// mens  'Triângulo Escaleno'
//  fim_se
//  fim_se
// senão
// mens  'Não e possível formar um triângulo'
// fim_se
// escrever mens
// fim
// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const valorA = parseFloat(document.querySelector('.num1').value);
  const valorB = parseFloat(document.querySelector('.num2').value);
  const valorC = parseFloat(document.querySelector('.num3').value);
  let mens;

  if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
    if (valorA === valorB && valorB === valorC) {
      mens = 'Triângulo Equilátero';
    } else if  (valorA === valorB || valorB === valorC || valorA === valorC) {
      mens = 'Triângulo Isósceles'
    } else {
      mens = 'Triângulo Escaleno';
    }
  } else {
    mens = 'Não e possível formar um triângulo'
  };

  const table = document.createElement('table');
  table.border = '1';

  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
  <th>a</th>
  <th>b</th>
  <th>c</th>
  <th>Mens</th>
`;
  table.appendChild(headerRow);

  const testData = [
    [1, 2, 3, 'Não e possível formar um triângulo'],
    [3, 4, 5, 'Triângulo Escaleno'],
    [2, 2, 4, 'Não e possível formar um triângulo'],
    [4, 4, 4, 'Triângulo Equilátero'],
    [5, 3, 3, 'Triângulo Isósceles'],
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

  result.innerText = ` ${mens}`;
  result.appendChild(table);
});