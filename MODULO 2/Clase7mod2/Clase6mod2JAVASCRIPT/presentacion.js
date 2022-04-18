//Number no existen numeros muy grandes
// redondear numeros
//redondear par abajo
console.log(Math.floor(69.23));
//redondear al numero mas cercano, segun los decimales para arriba o abajo 5
console.log(Math.round(69.11));
console.log(Math.round(69.5));
//obtener el maximo numero
console.log("El numero maximo es :" + Math.max(45, 56.22, 56, 21, 5, 1));
//obtener el minimo numero
console.log("El numero minimo es :" + Math.min(45, 56.22, 56, 21, 5, 1, 0.002));
// numeros con exponencial

// convertir de string a numero = parseInt


const base = parseInt("4");
const exponente = 2;
console.log(
  `El numero base es ${base} a la potencia ${exponente} es : ` +
    Math.pow(base, exponente)
);

//Numero Aleatorio
console.log("el numero aletorio es: " + Math.round(Math.random ()* 1000) );
 
//Raiz Cuadrada
console.log ("La raiz cuadrada es : " + Math.sqrt(64) );

//Obtener un nuero con dos decimales
const numero1 = " 84.56565"
console.log("numero con dos decimales es: " + Math.round(numero1 * 100)/100); 

const aux = Math.round(numero1 * 100)/100 ;
//obtener un numero con un decimal con toFixed () 
console.log(aux.toFixed(1)); //()  infresamos cuantos puntos despues de la coma
//parseFloat devuelve numero con coma o decimales
console.log(parseFloat(numero1).toFixed(4));
//Number convierte un string a numero 
console.log(Number(numero1).toFixed(4));

