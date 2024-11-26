// ejercicio3.js
// Ejercicio 3: Eliminar elementos del DOM
document.getElementById("eliminarElementoBtn").addEventListener("click", function() {
    const lista = document.getElementById("lista");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("No hay más elementos para eliminar.");
    }
});
