// ejercicio2.js
// Ejercicio 2: Verificación de edad
const prompt = require("prompt-sync")();
const edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
