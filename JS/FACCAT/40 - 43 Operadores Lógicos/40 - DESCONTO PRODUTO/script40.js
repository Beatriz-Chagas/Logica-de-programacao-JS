// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
// a pagar (total a pagar = total - desconto), sabendo-se que:
//  - Se quantidade <= 5 o desconto será de 2%
//  - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//  - Se quantidade > 10 o desconto será de 5%
// Autor(a)    : Beatriz Chagas

// Obter os valores dos inputs
const nome = document.querySelector('.produto').value;
const quantidade = parseInt(document.querySelector('.num1').value);
const precoUnitario = parseFloat(document.querySelector('.num2').value);

// Calcular o total
const total = quantidade * precoUnitario;

// Calcular o desconto
let desconto;
if (quantidade <= 5) {
  desconto = total * 0.02;
} else if (quantidade > 5 && quantidade <= 10) {
  desconto = total * 0.03;
} else {
  desconto = total * 0.05;
}

// Calcular o total a pagar
const totalAPagar = total - desconto;

// Exibir o resultado
const result = `
Nome do produto: ${nome} <br>
Preço unitário: R$ ${precoUnitario.toFixed(2)} <br>
Total: R$ ${total.toFixed(2)} <br>
Desconto: R$ ${desconto.toFixed(2)} <br>
Total a pagar: R$ ${totalAPagar.toFixed(2)}
`;

document.querySelector('.result').innerHTML = result;