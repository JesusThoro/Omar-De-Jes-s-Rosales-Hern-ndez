// ejercicio4.js
// Ejercicio 4: Promedio de un array
function promedio(array) {
    const suma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / array.length;
}

console.log("Promedio de [10, 20, 30, 40]:", promedio([10, 20, 30, 40]));
