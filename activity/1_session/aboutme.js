// Ejercicio 1
function ejercicio1() {
    // crear 3 variables
    let nombreApellidos;
    let profesion;
    let puestoLaboral;

    // Almacenamos datos en las variables declaradas
    nombreApellidos = "Sergio Dennis Aguilar Rodriguez";
    profesion = "Ingeniero de Sistemas";
    puestoLaboral = "Gestor de Desarrollo";

    //Creamos una frase para mostrar el mensaje
    let cadenaMensaje = `Hola, me llamo ${nombreApellidos} y me dedico a ${profesion}. Estoy cursando este Máster porque me gustaría trabajar en ${puestoLaboral}.`;
    
    return cadenaMensaje;

}

// Ejercicio 2
function ejercicio2() {
    // Respuesta
    let cadenaMensaje = `Se ejecuta primero lo importado del aboutme.js, ya que JavaScript se ejecuta línea por línea y en el archivo index.js se encuentra primero la función importada.`;
    
    return cadenaMensaje;

}

// Ejercicio 3
function ejercicio3() {
    // Respuesta
    let cadenaMensaje = `
    1. Console.- Permite revisar errores en el javascript, ayudando a resolver problemas. A su vez evaluar líneas de código o debugger.
    2. Network.- Permite revisar los requerimientos HTTP a través de una línea de tiempo. A su vez aplicar filtros de búsqueda sobre las mismas.
    3. Application.- Permite revisar la caché, cookies, local storage, etc. de las diferentes aplicaciones web que estén corriendo en el navegador.
    `;
    
    return cadenaMensaje;

}

// Ejercicio 4
function ejercicio4(num1, num2) {
    let a = [];
    for (let i = num1; i <= num2; i++) {
        if ( i % 7 == 0) {
            a.push(i);
        }
    }
    return a;
}

// Ejercicio 5
function ejercicio5() {
    // Respuesta
    let cadenaMensaje = `
    La diferencias entre <script> y <script type = "module">, consiste en que el primero te permite incrustar código javascript en un html,
    y el otro al ser un fichero en modo use strict solo se puede acceder a través de un import y exponer para su uso a través de un export.
    `;
    
    return cadenaMensaje;

}

// Ejercicio 6
function ejercicio6_1(texto) {
    let rpta;
    let formatter = {
        "prefix": "Hello ",
        "append": function(cadena) {
            rpta = this.prefix + cadena;
        }
    }
    formatter.append(texto)
    return rpta;

}

function ejercicio6_2(texto) {
    let rpta;
    let formatter = {
        "prefix": "Hello ",
        "append": function(cadena) {
            rpta = this.prefix + cadena;
        }
    }
    
    formatter.toLowerCase = function(cadena) {
        rpta = cadena.toLowerCase();
    }
    
    formatter.toLowerCase(texto)
    return rpta;

}

// Exporto la funcion par poder usarla en otro js
export let solucion = {
    "ejercicio1" :ejercicio1,
    "ejercicio2" :ejercicio2,
    "ejercicio3" :ejercicio3,
    "ejercicio4" :ejercicio4,
    "ejercicio5" :ejercicio5,
    "ejercicio6_1" :ejercicio6_1,
    "ejercicio6_2" :ejercicio6_2
}