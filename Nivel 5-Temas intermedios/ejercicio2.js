// ejercicio2.js
// Ejercicio 2: Callbacks
function ejecutarCallback(callback) {
    callback();
}

ejecutarCallback(() => {
    console.log("Este es un mensaje desde el callback.");
});
