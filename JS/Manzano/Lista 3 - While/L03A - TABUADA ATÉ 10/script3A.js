let result = document.querySelector('.result');

const numero = parseInt(prompt("Insira um número entre 1 e 10: "));
let multiplicador = 1;
let tabela = '';

while (multiplicador <= 10) {
  let resultado = numero * multiplicador;
  tabela += `${numero} x ${multiplicador} = ${resultado}\n`;
  multiplicador++;
}

result.innerText = tabela;