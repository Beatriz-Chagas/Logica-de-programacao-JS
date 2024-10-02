// Disciplina  : [L�gica de Programa��o com JavaScript]
// Professor   : Jailson Santos
// Descri��o  : 45) Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
// diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
// esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
// senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
// Autor(a)    : Beatriz Chagas

const form = document.querySelector('.formulario');
const result = document.querySelector('.result');
const senhaInput = document.querySelector('.num2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Evento submit disparado!');

  const codigo = parseFloat(document.querySelector('.num1').value);

  if (codigo === 1234) {
    result.innerText = `O usuário está correto!`;
    senhaInput.style.display = 'block';
  } else {
    result.innerText = `Usuário inválido!`;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const senha = parseFloat(senhaInput.value);
  if (senha === 9999) {
    result.innerText = `Acesso permitido!`;
  } else {
    result.innerText = `Senha ou usuário incorretos!`;
  }
});