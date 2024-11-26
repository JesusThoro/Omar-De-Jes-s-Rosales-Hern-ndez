// ejercicio5.js
// Ejercicio 5: Máximo y mínimo en un array
function maxMin(array) {
    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return { maximo, minimo };
}

const numeros = [3, 1, 7, 9, 2];
const { maximo, minimo } = maxMin(numeros);
console.log("Máximo:", maximo);
console.log("Mínimo:", minimo);
