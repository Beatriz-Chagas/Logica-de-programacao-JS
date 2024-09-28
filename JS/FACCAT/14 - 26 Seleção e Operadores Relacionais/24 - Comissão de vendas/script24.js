// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const vendas = parseFloat(document.querySelector('.vendas').value);
  let salario = parseFloat(document.querySelector('.salario').value);
  let comissao = 0;

  if (vendas <= 1500) {
    comissao = (vendas * 3) / 100;
  } else {
    comissao = (1500 * 3) / 100 + ((vendas - 1500) * 5) / 100;
  };

  salario = salario + comissao;

  result.innerText = `O salário total do vendedor é: R$ ${salario}`;
 
});