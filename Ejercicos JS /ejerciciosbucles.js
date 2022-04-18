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



//EJERCICIO 1
let edadSolicitada =prompt("Ingrese su edad") ;
if (edadSolicitada >= 18) {
  console.log("Con edad para conducir ");
}
else (edadSolicitada = Number) 
  console.log("Ingresar un numero valido")


//EJERCICIO 2
let numeroIngresado = prompt("Ingrese Numero del 0-10");
if ((numeroIngresado  <= 2  || numeroIngresado === 1 || numeroIngresado === 0))
 {
  console.log("Muy deficiente");
}
if ((numeroIngresado <= 4 && numeroIngresado >= 3 || numeroIngresado ===4  ) ) {
  console.log("Insuficiente");
}
if ((numeroIngresado <= 6 && numeroIngresado >= 5 || numeroIngresado == 6) ) {
  console.log("Suficiente");
}
if (numeroIngresado >= 7 && numeroIngresado <= 7) {
  console.log("Bien");
}
if ((numeroIngresado <= 9 && numeroIngresado >= 8||numeroIngresado === 9) ) {
  console.log("Notable");
}
if (numeroIngresado >= 10 && numeroIngresado <= 10  ) {
  console.log("Sobresaliente");
}
if (numeroIngresado > 10) {
  console.log("Numero erroneo");
  alert("Introduce número válido");
}

//EJERCICIO 3 retornan booleano mediante script
//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadenaTexto = [];
do{
  let textoSolicitado = prompt("Ingresa Texto");
  if (cadenaTexto=="") {
    cadenaTexto = cadenaTexto + textoSolicitado;
  } else {
    cadenaTexto = cadenaTexto +"-"+textoSolicitado
  }
  
  
}
while (confirm("Quieres ingresar otro texto")) {
  console.log(cadenaTexto);
}
//EJERCICIO 4
//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

//DECLARAMOS LA VARIABLE SUMA
let suma = 0;
//BUCLE DO WHILE PARA INTRODUCIR VARIOS
do {
    
    var numeroIngresado = prompt("Introduce un numero");
    
    if (Number(numeroIngresado) == numeroIngresado) {
        //CONVERTIMOS EL NÚMERO EN INTEGER (POR SI ACASO)
        numeroIngresado = Number(numeroIngresado);
       
        suma = suma + numeroIngresado;
    }
    //SI LO INTRODUCIDO NO ES UN NÚMERO
    else {
    //SI SE PULSÓ ACEPTAR SIN PONER UN NÚMERO VÁLIDO
        if (numeroIngresado != undefined) {
            alert(numeroIngresado + " No es un numero");
        }
    }
//VOLVEMOS ARRIBA MIENTRAS NO SE PULSE CANCELAR
} while (numeroIngresado != undefined);
//SI SE PULSÓ CANCELAR SALE DEL BUCLE E IMPRIME EL RESULTADO
console.log("La Suma es " + suma);
*/

//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

//6-Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

//let i, rep;

//for (i = 1; i <= 30; i++) {

//for (rep = 0; rep < i; rep++) {
//IMPRIMIMOS EL NÚMERO i, i VECES
// document.write(i);
//}
//IMPRIMIMOS UN SALTO DE LÍNEA
// document.write("<br>");
//}
//7 Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
/*
var numrep = prompt("Introduce numero de repeticiones");
//SI LO INTRODUCIDO ES UN NÚMERO
if (Number(numrep) == numrep) {
  //SI ES UN NÚMERO ENTRE 1 Y 50
  if (numrep > 0 && numrep <= 50) {
    var rep, i;
    //BUCLE QUE VA DESDE numrep HASTA 1
    for (i = numrep; i >= 1; i--) {
      //BUCLE DESDE i HASTA 1
      for (rep = i; rep >= 1; rep--) {
        document.write(i);
      }
      document.write("<br>");
    }
  } else {
    alert("El número introducido no es válido");
  }
}

//8 Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :

var numrep = prompt("Introduce numero de repeticiones");
//SI LO INTRODUCIDO ES UN NÚMERO
if (Number(numrep) == numrep) {
    //SI ES UN NÚMERO ENTRE 1 Y 50
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        //BUCLE QUE VA DESDE 0 HASTA numrep
        for (i = 0; i <=numrep; i++) {
            //BUCLE DESDE 1 HASTA i
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}
*/

//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
/*

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
*/
/*
let i;
let hasta500 = 500;
for (let i = 1; i <= hasta500; i++) {
  document.write(i);
  if (i % 4 == 0) {
    document.write(" Multiplo de 4");
  }
  if (i % 9 == 0) {
    document.write(" Multiplo de 9");
  }
  document.write("<br>");
  if (i % 5 == 0) {
    document.write("<hr>");
  } 
}
*/
/*/10 - Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
var i,j;
//PEDIMOS POR TECLADO EL NÚMERO DE FILAS
//Number fuerza a que se introduzca un número
var filas = Number(prompt("Introduce numero de filas"));
//PEDIMOS EL NÚMERO DE COLUMNAS
var colum = Number(prompt("Introduce numero de columnas"));
//MULTIPLICAMOS filas * columnas Y GUARDAMOS EL RESULTADO EN res
var res = filas * colum;
//COMENZAMOS A IMPRIMIR LA TABLA
document.write("<table border>");
//BUCLE DESDE 0 HASTA EL NÚMERO DE FILAS
for (i = 0; i < filas; i++) {
    //EN CADA FILA ESCRIBIMOS UN <tr> PARA COMENZAR LA FILA
    document.write("<tr>");
    //BUCLE DESDE 0 HASTA EL NÚMERO DE COLUMNAS
    for (j = 0; j < colum; j++) {
        //EN CADA UNA ESCRIBIMOS UN <td> PARA COMENZAR UNA CELDA
        document.write("<td>");
        //LUEGO ESCRIBIMOS EL VALOR DE res
        document.write(res);
        //LE RESTAMOS 1 A res
        res--;
        //Y ESCRIBIMOS UN </td> PARA CERRAR LA CELDA
        document.write("</td>");
    }
  };
*/
/*/11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
let num1=Number(prompt("escribe un numero"));
let num2=Number(prompt("escribe un numero"));
let num3=Number(prompt("escribe un numero"));

let maximoNumero = Math.max(num1,num2,num3)
if(maximoNumero==num1){
  document.write("El numero mayor es " + num1)

}
if(maximoNumero==num2){
  document.write("El numero mayor es " + num2)

}
if(maximoNumero==num3){
  document.write("El numero mayor es " + num3)

}
*/
//12-- Realiza un script que genere un número aleatorio entre 1 y 99
//let aleatorio = Math.floor((Math.random()*99) + 1);//Math.floor redondea numeros enteros
//document.write(aleatorio)


//Ejercicios String
//13- Realiza un script que pida un texto y lo muestre en mayúsculas.
//let textoIngresado = prompt("Introduce texto")
//textoMayusculas = textoIngresado.toUpperCase();
//console.log(textoMayusculas);

//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

//let textoIngresado = prompt("Introduce texto")
//for (let i = 0; i < textoIngresado.length; i++) {
  //const element = textoIngresado[i]+ "-";
  //document.write(element);
  
//}

var cadena = prompt("Introduce una cadena de texto:");
    var numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    var car;
    var contador = 0;
    var i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
    }
    document.write("Número de Vocales: " + contador + ".");
