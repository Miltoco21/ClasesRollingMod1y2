// Ejercicios JS Bucles
/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje
 que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
---------------------------------------------------------------------------------
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
---------------------------------------------------------------------------------
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
---------------------------------------------------------------------------------
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
---------------------------------------------------------------------------------
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
---------------------------------------------------------------------------------
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….




*/


let edadSolicitada = Number(prompt("Ingrese su edad"));
if (edadSolicitada >= 18) {
  console.log("Con edad para conducir ");
}
if (edadSolicitada === Number) {
  console.log("Ingresar un numero valido")
  
}