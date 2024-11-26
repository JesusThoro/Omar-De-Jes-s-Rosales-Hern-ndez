// ejercicio5.js
// Ejercicio 5: Herencia
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    mostrarGrado() {
        console.log(`${this.nombre} está en el grado: ${this.grado}.`);
    }
}

const estudiante1 = new Estudiante("Luis", 20, "10°");
estudiante1.saludar();
estudiante1.mostrarGrado();
