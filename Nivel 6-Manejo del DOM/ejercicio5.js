// ejercicio5.js
// Ejercicio 5: Formularios
document.getElementById("formulario").addEventListener("submit", function(event) {
    const inputs = document.querySelectorAll("#formulario input");
    let formularioValido = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        event.preventDefault();
        alert("Por favor, completa todos los campos.");
    }
});
