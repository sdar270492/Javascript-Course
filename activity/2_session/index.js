// Ejercicio 1
let person = {
  name: "John Doe", 
  age: 21,
  profession: "Developer"
}

let showProp = (obj) => { 
  let result = [];
  for (let prop in obj) {
      result.push(prop);
  }
  return result;
}
console.log(showProp(person));

// Ejercicio 2
let ejercicio2 = ()=> {
  var respuesta = `
1.- this como objeto global del scope global.
2.- this como objeto del scope del objeto.
3.- this como funcion del scope de la función.
  `;

  return respuesta;
}
console.log(ejercicio2());
console.log("1.-");

function globalExample() {
  cadena = "Hola Mundo!!!";
}

globalExample();

console.log(this.cadena);

console.log("2.-");

let alumno = {
  nombre:"Sergio",
  apellidos:"Aguilar",
  nombrecompleto: function() {
    return this.nombre + " " + this.apellidos;
  }
}

console.log(alumno.nombrecompleto())

console.log("3.-");

class procesarNombres { 
  constructor(nombres, apellidos) {
    this.nombres = nombres;
    this.apellidos = apellidos;
  }
  
  nombrecompleto = () => {
    return this.nombres + " " + this.apellidos;
  }
};

 const result = new procesarNombres("Diego","Ramirez");
 console.log(result.nombrecompleto());

// Ejercicio 3
class InvertirCadena{

  cadenaInvertir = "";

  constructor(cadena) {
    this.cadenaInvertir = cadena;
  }
  
  invertirCadena = () => {
  }
  

  ejecutar = () => {
    if ( this.cadenaInvertir == '' ) {
      throw new Error("''.throw error");
    }
    return this.cadenaInvertir.split('').reverse().join('');
  }

}

let invertirCadena = new InvertirCadena("Hola mundo");
console.log(invertirCadena.ejecutar());

console.log(invertirCadena.nuevoMetodo?.());

// Ejercicio 4
class Seguridad {
  constructor(username, password){
    this.username = username;
    this.password = password;
  }

  login() {
    if (this.username == "admin" && this.password == "passwd"){
      alert("Usuario logeado!");
    } else {
      alert("Usuario o contraseña son incorrectas!");
    }
  }
}

let login = new Seguridad("admin", "passwd");
// login.login();
let loginbad = new Seguridad("pepe", "bad");
// loginbad.login();

// Ejercicio 5
const loginSuccess = document.getElementById('loginSuccess');
const loginFailure = document.getElementById('loginFailure');

loginSuccess.addEventListener('click', event => {
  let login = new Seguridad("admin", "passwd");
  login.login();
});

loginFailure.addEventListener('click', event => {
  let login = new Seguridad("pepe", "bad");
  login.login();
});

// Ejercicio 6
let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

let ingresarCredenciales = async (username, password) => {
  try {
    let respuesta = await loginWitUsername(username, password);
    console.log(respuesta);
  } catch (err) {
    console.log(err);
  }
}

const loginSuccessAsync = document.getElementById('loginSuccessAsync');
const loginFailureAsync = document.getElementById('loginFailureAsync');

loginSuccessAsync.addEventListener('click', event => {
  ingresarCredenciales("admin", "passwd");
});

loginFailureAsync.addEventListener('click', event => {
  ingresarCredenciales("admin", "passwda");
});