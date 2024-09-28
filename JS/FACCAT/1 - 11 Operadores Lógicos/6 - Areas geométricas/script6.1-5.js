// Disciplina  : [Lógica de Programação com JavaScript]
// Professor   : Jailson Santos
// Descrição   : Solicitar ao usuário que insira um valor, calcular o antecessor e o sucessor, entregar o resultao de volta para o usuário.
// Autor(a)    : Beatriz Chagas


// Seleciona o formulário de retângulo
const formRetangulo = document.querySelector('#formR');

// Seleciona o elemento que irá exibir o resultado do cálculo da área do retângulo
const resultRetangulo = document.querySelector('#retangulo');

// Adiciona um evento de submit ao formulário de retângulo
formRetangulo.addEventListener('submit', (e) => {
  // Previne o comportamento padrão do formulário (enviar o formulário para o servidor)
  e.preventDefault();

  // Seleciona os valores dos campos de input do formulário de retângulo
  const baseR = Number(document.querySelector('#baseR').value);
  const alturaR = Number(document.querySelector('#alturaR').value);

  // Verifica se os valores inseridos são números
  if (isNaN(baseR, alturaR)) {
    // Se não forem números, exibe uma mensagem de erro
    alert("Erro: você deve digitar um número inteiro!");
  } else {
    // Se forem números, calcula a área do retângulo
    let areaR = baseR * alturaR;
    // Exibe o resultado do cálculo
    resultRetangulo.innerText = ("A área do retângulo é: " + areaR);
  }
});

// Repete o processo para os formulários de quadrado, círculo, hexágono e triângulo
const formQuadrado = document.querySelector('#formQ');
const resultQuadrado = document.querySelector('#quadrado');

formQuadrado.addEventListener('submit', (e) => {
  e.preventDefault();
  const ladoQ = Number(document.querySelector('#ladoQ').value);

  if (isNaN(ladoQ)) {
    alert("Erro: você deve digitar um número inteiro!");
  } else {
    let areaQ = ladoQ * ladoQ;
    resultQuadrado.innerText = ("A área do quadrado é: " + areaQ);
  }
});

const formCirculo = document.querySelector('#formC');
const resultCirculo = document.querySelector('#circulo');

formCirculo.addEventListener('submit', (e) => {
  e.preventDefault();
  const raioC = Number(document.querySelector('#raioC').value);

  if (isNaN(raioC)) {
    alert("Erro: você deve digitar um número inteiro!");
  } else {
    let areaC = 3.14 * (raioC * raioC);
    resultCirculo.innerText = ("A área do círculo é: " + areaC);
  }
});

const formHexagono = document.querySelector('#formH');
const resultHexagono = document.querySelector('#hexagono');

formHexagono.addEventListener('submit', (e) => {
  e.preventDefault();
  const ladoH = Number(document.querySelector('#ladoH').value);

  if (isNaN(ladoH)) {
    alert("Erro: você deve digitar um número inteiro!");
  } else {
    let areaH = 3 * Math.SQRT2(3) * ladoH ^ 2 / 2
    resultHexagono.innerText = ("A área do hexágono é: " + areaH);
  }
});

const formTriangulo = document.querySelector('#formT');
const resultTriangulo = document.querySelector('#triangulo');

formTriangulo.addEventListener('submit', (e) => {
  e.preventDefault();
  const baseT = Number(document.querySelector('#baseT').value);
  const alturaT = Number(document.querySelector('#alturaT').value);

  if (isNaN(baseT, alturaT)) {
    alert("Erro: você deve digitar um número inteiro!");
  } else {
    let areaT = (baseT * alturaT) / 2;
    resultTriangulo.innerText = ("A área do triângulo é: " + areaT);
  }
});