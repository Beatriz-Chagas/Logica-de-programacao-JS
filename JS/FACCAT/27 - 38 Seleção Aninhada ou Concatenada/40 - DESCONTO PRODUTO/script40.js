// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
// unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
// a pagar (total a pagar = total - desconto), sabendo-se que:
//  - Se quantidade <= 5 o desconto será de 2%
//  - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
//  - Se quantidade > 10 o desconto será de 5%
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');
  
  const nome = document.querySelector('.produto').value;
  const quantidade = parseFloat(document.querySelector('.quantidade').value);
  const preco = parseFloat(document.querySelector('.preco').value);
  let desconto;
  let  total = quantidade * preco;

  if ( quantidade <= 5) {
    desconto = (total  * 2) / 100;
  } else {
    if (quantidade > 5 && quantidade <= 10) {
      desconto = (total * 3) / 100;
  } else {
    desconto = (total * 5) / 100;
  }};

result.innerText  = `
Nome do produto: ${nome} \n
Preço unitário: R$ ${preco} \n
Total: R$ ${total} \n
Desconto: R$ ${desconto} \n
Total a pagar: R$ ${(total - desconto)}
`;
});