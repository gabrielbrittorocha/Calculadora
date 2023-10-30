function somarNumeros(x, y) {
    return x + y
}

function subtrairNumeros(x, y) {
    return x - y
}

function multiplicarNumeros(x, y) {
    return x * y
}

function dividirNumeros(x, y) {
    if (y === 0 || x === 0) {
        return "Não é possivel dividir um número por zero"
    }

    return x / y
};

const numero1 = 4
const numero2 = 2

console.log(`A soma dos números é: ${somarNumeros(numero1, numero2)}`);
console.log(`A divisão dos números é: ${dividirNumeros(numero1, numero2)}`);
console.log(`A multiplicação dos numeros é: ${multiplicarNumeros(numero1, numero2)}`);
console.log(`A subtração dos números é: ${subtrairNumeros(numero1, numero2)}`);