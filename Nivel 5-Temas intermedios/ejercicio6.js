// ejercicio6.js
// Ejercicio 6: Objetos y métodos
const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b !== 0 ? a / b : "No se puede dividir entre cero"),
};

console.log("Suma: 5 + 3 =", calculadora.sumar(5, 3));
console.log("Resta: 5 - 3 =", calculadora.restar(5, 3));
console.log("Multiplicación: 5 * 3 =", calculadora.multiplicar(5, 3));
console.log("División: 5 / 0 =", calculadora.dividir(5, 0));
console.log("División: 5 / 2 =", calculadora.dividir(5, 2));
