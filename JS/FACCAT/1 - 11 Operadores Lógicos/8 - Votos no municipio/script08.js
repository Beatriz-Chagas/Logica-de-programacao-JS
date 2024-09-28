// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o   : Solicitar ao us�rio que insira tr�s valores, realizar o calculo e mostrar o valor total de pessoas que votaram.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nulo = Number(document.querySelector('#nulo').value);
  const branco = Number(document.querySelector('#branco').value);
  const valido = Number(document.querySelector('#valido').value);

  const total = nulo + branco + valido;
  const perbranco = (branco / total) * 100;
  const pervalido = (valido / total) * 100;
  const pernulo = (nulo / total) * 100;

  result.innerText = `
    -------------------------------------------------------------------
    A quantidade de pessoas que votaram neste município é: ${total}
    A porcentagem de pessoas que votaram nulo é: ${pernulo.toFixed(2)}%
    A porcentagem de pessoas que votaram em branco é: ${perbranco.toFixed(2)}%
    A porcentagem de pessoas que tiveram o voto válido é: ${pervalido.toFixed(2)}%
    -------------------------------------------------------------------
  `;
});