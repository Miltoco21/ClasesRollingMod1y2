//for y map hacen el mismo resultado ,siempre es mejor usar Map ()
//funcion constructora

function Persona(name, lastname, age) {
  this.nombre = name;
  this.apellido = lastname;
  this.edad = age;
  this.comer = () => {
    alert(`Soy ${this.nombre}`);
  }; //
}
const persona1 = new Persona("milton", "peña", 30);
const persona2 = new Persona("Roger", "Federer", 38);

//objeto Object() crea un nuevo objeto vacio
/*
let persona3 = new Object();
persona3.nombre = "ale";
persona3.correr = function () {
  alert("estoy corriendo");
};
persona3 = persona1;
//object.create()
const personacreada = Object.create(persona1);
console.log(personacreada);

// variable de referencia del objeto persona1
let personaA = { nombre: "Juan" };

// variable de referencia del objeto persona2
var personaB = { nombre: "Juan" };
let personaC = personaA;
personaA == personaB; // retorna false
personaA === personaB; // retorna false
if (personaA === personaC) {
  //son iguales por que se asigna el valor a la variable
  alert("true");
} else {
  alert("false");
} */

//comparar propiedades es mas comun que solo objetos

//Objetos Globales
//ya vienen y son propios de JS

//Clase contenedor ES6 reemplaza funcion constructora,tiene como origen o matriz Class,
// new + Nombre de la clase ()
class Motos {
  constructor(marca, cilindrada, color) {
    this.marca = marca;
    this.cilindrada = cilindrada;
    this.color = color;
  }
  encender() {
    alert("la moto esta encendida");
  }
  apagar() {
    alert("la moto esta apagada");
  }
  cambiarColor (colorNuevo) {//siempre this para cambios dentro del objeto
    this.color = colorNuevo
  }
}
 const moto = new Motos ("KTM","Duke 200","rojo"); 


 console.log(moto);   

 //Setter y getters