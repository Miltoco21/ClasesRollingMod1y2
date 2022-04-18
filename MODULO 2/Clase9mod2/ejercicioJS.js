/* 
Pedir al usuario dos numeros (prompt)
Crear una funcion que reciba 2 numeros (mayor que cero) y me devuelva el mayor
Llamar a esa funcion con los dos numeros ingresados por el usuario

---------
Determinar si el valor devuelto por la funcion es par o impar 



---------
Luego, con el mayor (devuelto por la funcion) y muestre ese numero por consola hasta llegar a 0

Resultado esperado por ejemplo si la funcion devuelve 10

10
9
8
7
6
5
4
3
2
1
0


*/

let numero1 = Number(prompt("Ingrese numero"));

let numero2 = Number(prompt("Ingrese numero"));


/*
console.log(numeroingresado1);
console.log(numeroingresado2);
let NumeroMayor = ("numero Mayor es:" + ( Number(Math.max(numeroingresado1, numeroingresado2))));
console.log(NumeroMayor);
*/

const NumMayor = function (Number,Number2,) {
  return Math.max(Number, Number2,);
  
}
let mayor = NumMayor(numero1,numero2,)
console.log(mayor);
if  (mayor % 2 == 0) {
  console.log("el numero es par");
} else {
  console.log("numero es impar");
}
 




