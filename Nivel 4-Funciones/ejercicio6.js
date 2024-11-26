// ejercicio6.js
// Ejercicio 6: Contar vocales
function contarVocales(palabra) {
    const vocales = "aeiou";
    let contador = 0;
    for (const letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log("Vocales en 'programación':", contarVocales("programación"));
console.log("Vocales en 'desarrollo':", contarVocales("desarrollo"));
