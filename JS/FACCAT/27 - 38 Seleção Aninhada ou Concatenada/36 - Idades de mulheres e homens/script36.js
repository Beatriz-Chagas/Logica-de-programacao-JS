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
  
  let homemVelho, homemNovo, mulherNova, mulherVelha;
  
  if (homem1 > homem2) {
    homemVelho = homem1;
    homemNovo = homem2;
  } else {
    homemVelho = homem2;
    homemNovo = homem1;
  }
  
  if (mulher1 < mulher2) {
    mulherNova = mulher1;
    mulherVelha = mulher2;
  } else {
    mulherNova = mulher2;
    mulherVelha = mulher1;
  }
  
  const soma = homemVelho + mulherNova;
  const produto = homemNovo * mulherVelha;
  
  result.innerText = `A soma das idades do homem mais velho tendo ${homemVelho} com a mulher mais nova tendo ${mulherNova} é ${soma} \n O produto das idades do homem mais novo tendo ${homemNovo} com a mulher mais velha tendo ${mulherVelha} é ${produto}`;
});