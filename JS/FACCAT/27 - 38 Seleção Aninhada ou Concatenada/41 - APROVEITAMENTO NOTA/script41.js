// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 41)  Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
// exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
// e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
//  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
// Média_de_Aproveitamento = ---------------------------------------------------------
// 7
// A atribuição de conceitos obedece a tabela abaixo:
// Média de Aproveitamento Conceito
// > = 9,0 A
// > = 7,5 e < 9,0 B
// > = 6,0 e < 7,5 C
// < 6,0 D
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

const nota1 = parseFloat(document.querySelector('.num1').value);
const nota2 = parseFloat(document.querySelector('.num2').value);
const nota3 = parseFloat(document.querySelector('.num3').value);
const mediaExercicios = parseFloat(document.querySelector('.num4').value);

console.log (nota1, nota2, nota3, mediaExercicios);


const aproveitamento = ( nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios / 7);
const conceito = aproveitamento >= 9 ? 'A' : aproveitamento >=  7.5 ? 'B' : aproveitamento >= 6 ? 'C' :  'D';

console.log (aproveitamento, conceito);

result.innerText = `A média de aprveitamento deste aluno é: ${aproveitamento} \n
Se configura no conceito de avaliação: ${conceito}`;

console.log (aproveitamento, conceito);


});