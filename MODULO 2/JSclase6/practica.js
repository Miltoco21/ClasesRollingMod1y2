// hola mi nombre es franco, un gusto.
// let saludo = "hola ";
// let presentacion = saludo + "mi nombre es franco";
///presentacion = presentacion + ", un gusto";

let presentacion = "hoLa mi NOMBRE es franco, uN gusto.";
console.log(presentacion.length);
//letras Mayus ,despues de method, uso de parentesis ()
console.log(presentacion.toUpperCase() );
//Letras minusculas
console.log( presentacion.toLowerCase ())

let nombre  = "Milton";
let apellido = "Pena";
console.log ("nombre.lenghth : " + nombre.length);
console.log(`${nombre} ${apellido}` ); //    `${ } subcomando dentro de log

let nombreProd = "Coca Cola";
let precioProd = 15;
let unidadesDispo = 1;
// console.log("Disponible: " + unidadesDispo);
// console.log(`Disponible: ${unidadesDispo}`);
console.log(nombreProd + " $" + precioProd + " Disponible: " + unidadesDispo);
console.log(`${nombreProd} $${precioProd} Disponible: ${unidadesDispo}`)

// Obtener ultimo caracter de un string (cadena de texto)
console.log(apellido);
let ultimaPosicionApellido = apellido.length - 1; //posicion comienza con cero
console.log(ultimaPosicionApellido);
let ultimoCaracterApellido = apellido.charAt(ultimaPosicionApellido);
console.log(ultimoCaracterApellido)

//Ejemplo
// El usuario ingresa por pantalla su apellido
// Simpre la primera letra de su apellido debera ser mayusculas
// Mostrar una alerta con el apellido

let apellidoIngresado = prompt("Ingrese su apellido")
let primeraLetra = apellidoIngresado.toUpperCase (0)
let letraMayuscula = primeraLetra.toUpperCase();

let restoDeApellido = apellidoIngresado.substring(1);
const apellidoConPrimeraLetraMayusculas = letraMayuscula + restoDeApellido;
console.log(
  `Apellido ingresado: ${apellidoIngresado} --> apellido transformado: ${apellidoConPrimeraLetraMayusculas}`
);

alert(apellidoConPrimeraLetraMayusculas);




