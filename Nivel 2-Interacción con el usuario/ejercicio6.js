// ejercicio6.js
// Ejercicio 6: Palíndromos
const prompt = require("prompt-sync")();
const palabra = prompt("Ingresa una palabra: ").toLowerCase();
const esPalindromo = palabra === palabra.split("").reverse().join("");

if (esPalindromo) {
    console.log(`"${palabra}" es un palíndromo.`);
} else {
    console.log(`"${palabra}" no es un palíndromo.`);
}
