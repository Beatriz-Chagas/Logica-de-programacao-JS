function somar(x, y) {
    return x + y;
};

function subtrair(x, y) {
    if (x > y) {
        return x - y;
    } else {
        return y - x;
    };
};
function multiplicar(x, y) {
    return x * y;
};

function dividir(x, y) {
    if (y == 0) {
        return "Não é possível dividir por zero.";
    } else {
        return x / y;
    };
};

let num1 = parseInt(prompt("Insira um numero inteiro aqui"));
let num2 = parseInt(prompt("Insira outro numero inteiro aqui"));

let escolha = parseInt(prompt(
    "Escolha uma operação:\n 1 - soma \n 2 - subtrair \n 3 - multiplicação \n 4 - divisão"
));

switch (escolha) {
    case 1: {
        resultado = somar(num1, num2);
        document.getElementById("resultado").innerHTML = `${num1} + ${num2} = ${resultado}`
    } break;

    case 2: {
        resultado = subtrair(num1, num2);
        document.getElementById("resultado").innerHTML = `${num1} - ${num2} = ${resultado}`
    } break;

    case 3: {
        resultado = multiplicar(num1, num2);
        document.getElementById("resultado").innerHTML = `${num1} * ${num2} = ${resultado}`
    } break;

    case  4: {
        resultado = dividir(num1, num2);
        document.getElementById("resultado").innerHTML = `${num1} / ${num2} = ${resultado}`;
    } break;

    default:
        document.getElementById("resultado").innerHTML = `Valores incorretos.`    
};
