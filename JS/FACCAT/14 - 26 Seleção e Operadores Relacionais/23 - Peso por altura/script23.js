// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
// erros, identifique os erros no algoritmo apresentado abaixo:
// Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
// e mostre seu peso ideal, utilizando as seguintes fórmulas:
//  - para sexo masculino: peso ideal = (72.7 * altura) - 58
//  - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
  const resultDiv = document.querySelector('.result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('.nome').value;
    const altura = document.querySelector('.altura').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    if (!altura || altura <= 0) {
      resultDiv.innerHTML = 'Altura inválida!';
      return;
    }

    let pesoIdeal;
    if (sexo === 'M') {
      pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === 'F') {
      pesoIdeal = (62.1 * altura) - 44.7;
    }

    resultDiv.innerHTML = `Olá, ${nome}! Seu peso ideal é de aproximadamente ${pesoIdeal.toFixed(2)} kg.`;
  });