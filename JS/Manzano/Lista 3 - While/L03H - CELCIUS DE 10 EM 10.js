// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
// 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
// programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
// é
// 5
// 9 +160
// =
// C
// F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 
let celcius = 10, fahren = 0;

   while (celcius < 101) {
    fahren = (9 * celcius + 160) / 5;
   console.log ( celcius,"Cº é representado em Fahrenheit como: "+ fahren)
   celcius = celcius + 10;
   }

