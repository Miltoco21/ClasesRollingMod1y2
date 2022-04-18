/*
//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("Un Mensaje");
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("helo world");
//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
let suma = 3 + 5;
console.log("el resultado es : " + suma);
//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let NombreIngresado = prompt("ingrese Nombre usuario");

console.log("Hola " + NombreIngresado);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
let num1 = "3";
let num2 = "5";
let resultado = parseInt(num1) + parseInt(num2);

console.log("El resultado es :" + resultado);
//6 y 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numerosIngresado1 = prompt("Ingrese Numero");
let numerosIngresado2 = prompt("Ingrese Numero");
let numerosIngresado3 = prompt("Ingrese Numero");
let NumerosIngresados =
  (numerosIngresado1, numerosIngresado2, numerosIngresado3);

console.log("el numero mayor es : " + Math.max(NumerosIngresados));

//8.- Escribe un programa que pida un número y diga si es divisible por 2
let numero = Number(prompt("Ingrese Numero"));
if (numero % 2 == 0) {
  console.log("el numero es divisible por dos");
} else {
  console.log("numero no es divisible por dos");
}
*/ 
//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)



//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//let n1 = prompt("Escribe un número");
//let n2 = prompt("Escribe un número");
//if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
//document.write("Es divisible por 2, 3, 5 o 7");
//} else {
//document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
//}
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)