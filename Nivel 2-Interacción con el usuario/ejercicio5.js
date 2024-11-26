// ejercicio5.js
// Ejercicio 5: Validación de entrada
const prompt = require("prompt-sync")();
const entrada = prompt("Ingresa un número: ");
const numero = parseFloat(entrada);

if (!isNaN(numero)) {
    console.log(`Has ingresado el número: ${numero}`);
} else {
    console.log("Error: No has ingresado un número válido.");
}
