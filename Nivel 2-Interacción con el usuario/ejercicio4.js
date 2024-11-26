// ejercicio4.js
// Ejercicio 4: Conversión de temperaturas
const prompt = require("prompt-sync")();
const celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));
const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F.`);
