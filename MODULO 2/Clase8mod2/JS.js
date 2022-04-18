let estacion = prompt("Cual es tu estacion del año preferida?");
switch (estacion) {
  case "primavera":
    console.log("la primavera");

    break;
  case "verano":
    console.log(" el verano");

    break;
    break;
  case "otoño":
    console.log("el otoño");

  default:
    console.log("no es un estacion del año");
    break;
}
// condiciones compuestas
let num = 15
if (num >= 10) {
  if (num <= 20) {
    console.log("El numerooo esta entre 10 y 20");
  }
  
}

//operadores logicos - SI - NO a y b verderos true
 // && ----> AND ambas al mismo tiempode las  condiciones se deben   cumplir para ejecutar codigo
 // || ----> OR  solo una de las condiciones se deben   cumplir para ejecutar codigo

 //condicion A   &&  condicion B 
 /*
  10 > 5 && 10 > 8 
 true && true ----> 
 Sirve para usar un if en vez de dos codifgos if
 */ 



let numero = 7;
 if ( 10 > 9 && 10 > 8 ) {
 console.log("el numero esta entre 10 y 20 ");
 }

let namber = 7;
 if ( namber === 9 || namber <= 8 ) {
 console.log("el numero es igual a 9 O  menor o igual que 8 ");
}