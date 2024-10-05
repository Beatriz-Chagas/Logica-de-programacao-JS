
// Descri��o:  Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

let contador = 0;
let base = 3;

while (contador <= 15) {
  let resultado = Math.pow(base, contador);
  console.log(contador + " ^ 3 = " + resultado);
  contador++;
}