// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas)
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = Number(document.querySelector('.num1').value);
  const num2 = Number(document.querySelector('.num2').value);
  let salario;

  if (num1 <= 160){
     salario = num1 * num2;
    result.textContent = `O salário total do funcionário é R$ ${salario}`
  } else {
    salario = 160 * num2;

    const horasExtras = num1 - 160;
    const valorExtra =  num2 + num2  * 0.5;
    const salarioExtra = horasExtras * valorExtra;
    salario = salario + salarioExtra;
    result.textContent = `O salário total do funcionário é R$ ${salario}`

  };

});

