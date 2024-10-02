// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 49)Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. Se for
// respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.
// Autor(a)    : Beatriz Chagas
const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
const nota1Input = document.querySelector('.nota1');
const nota2Input = document.querySelector('.nota2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nota1 = Number(nota1Input.value);
  let nota2 = Number(nota2Input.value);

  if (nota1 < 0 || nota1 > 10) {
    result.innerText = 'Nota 1 inválida';
    nota1Input.focus();
    return;
  }

  nota2Input.style.display = 'block';
  if (nota2 < 0 || nota2 > 10) {
    result.innerText = 'Nota 2 inválida';
    nota2Input.focus();
    return;
  }

  if  (nota1 > 0 && nota1 < 10 && nota2 > 0 && nota2 < 10) {
    const total = (nota1 + nota2) / 2;
    result.innerText = `A média final deste aluno(a) é: ${total}`;
  
  // Acrescenta a mensagem "NOVO CÁLCULO (S/N)?" ao final do exercício
  const novoCalculo = prompt('NOVO CÁLCULO (S/N)?');

  if (novoCalculo.toUpperCase() === 'S') {
    // Limpa os campos e permite que o usuário realize um novo cálculo
    nota1Input.value = '';
    nota2Input.value = '';
    result.innerText = '';
  } else {
    // Encerra o algoritmo
    result.innerText = 'Fim do algoritmo.';
    form.removeEventListener('submit', this);
  }}
});