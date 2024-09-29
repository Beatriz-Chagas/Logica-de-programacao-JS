// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
// dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
// das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
// novo com a mulher mais velha. 
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const mulher1 = parseFloat(document.querySelector('.num1').value);
  const mulher2 = parseFloat(document.querySelector('.num2').value);
  const homem1 = parseFloat(document.querySelector('.num3').value);
  const homem2 = parseFloat(document.querySelector('.num4').value);

  if (homem1 < homem2) {
    let temp = homem1;
    homem1 = homem2;
    homem2 = temp;
  };
  
  if (mulher1 < mulher2) {
    let temp = mulher1;
    mulher1 = mulher2;
    mulher2 = temp;
  };

  const soma = homem1 + mulher2;
  const produto = homem2 * mulher1;

  result.innerText = ` A soma das idades do homem mais velho tendo ${homem1} com a mulher mais nova tendo ${mulher2} é ${soma} \n O produto das idades do homem mais novo tendo ${homem2} com a mulher mais velha tendo ${mulher1} é ${produto}`

});