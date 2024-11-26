// ejercicio6.js
// Ejercicio 6: Buscar en un array
const frutas = ["manzana", "pera", "naranja", "uva", "plátano"];
const busqueda = "naranja";
const posicion = frutas.indexOf(busqueda);

if (posicion !== -1) {
    console.log(`La fruta "${busqueda}" está en la posición ${posicion}.`);
} else {
    console.log(`La fruta "${busqueda}" no se encuentra en el array.`);
}
