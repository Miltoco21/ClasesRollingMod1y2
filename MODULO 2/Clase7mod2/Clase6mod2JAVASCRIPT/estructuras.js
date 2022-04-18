//IF
// if(condicion){// quiero que se ejecute y se cumpal (true - verdero) }
/*/

/*/

/*/

//let numero = 7;

if (numero < 10) {
  console.log(`El numero es menor que 10`);
}
/*/
let palabraBuscada = prompt("Ingrese el nombre de una marca");

let nombreMarcaPepsi = "pepsi";
if (palabraBuscada === nombreMarcaPepsi) {
  console.log("La marca que buscaste es pepsi");
} else {
  console.log("La marca que buscaste  no es pepsi");
}

//condiciones anidadas
let numero = Number (prompt("Ingrese un numero"));
if (numero < 10) {
  console.log(`El numero ${numero} es menor a 10 `);
} else if (numero === 10) {
  console.log(`El numero ${numero} es igual a 10`);
} else {
  console.log(`El numero ${numero} es mayor a 10`);
}
 //Switch funciona como si fuera if  y termina el codigo mediante break                                       

switch (palabraBuscada) {
  case "coca":
    console.log("La palabra buscada es coca");
    break;
    case "pepsi":
    console.log("La palabra buscada es pepsi");
    break;

  default:
    break;
}