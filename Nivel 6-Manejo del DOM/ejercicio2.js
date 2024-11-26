// ejercicio2.js
// Ejercicio 2: Crear elementos en el DOM
document.getElementById("agregarElementoBtn").addEventListener("click", function() {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    document.getElementById("lista").appendChild(nuevoElemento);
});
