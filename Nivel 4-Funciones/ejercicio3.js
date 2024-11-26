// ejercicio3.js
// Ejercicio 3: Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial de 5:", factorial(5));
console.log("Factorial de 0:", factorial(0));
