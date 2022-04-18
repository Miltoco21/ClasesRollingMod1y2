//Funcion declarativa
function saludarAlumnos() {
  console.log("aqui comienza mi funcion");
  let saludo = "Hola Comision";
  return saludo;
}

// Funcion anonima
const saludar = function () {
  console.log("Hola Comision");
};

//Creando funcion

//let num1a = parseInt(prompt("ingresa el primer numero"));
//let num2b = parseInt(prompt("ingresa el segundo numero"));
let resultadoSuma;
const sumaNums = function (primerValor , segundoValor) {

  let resultado = primerValor + segundoValor;
  return resultado;
}

//resultadoSuma = sumaNums(num1a, num2b);
//console.log(`este es el console de resultadSuma ${resultadoSuma}`);


//Funcion Flecha o arrow function
const funcAn = "esto es una funcion anonima"
const funcArr = "esa es funcion flecha"

const saludo = function (a) {
  console.log("esto es una funcion anonima");
};


const saludo2 = (a,b) => {
  let resultado = a + b;
  console.log(resultado);
}
saludo(funcAn);
saludo2(20,30);

//Scope : es la vida que tiene una variable segun donde este declarada
//Scope Local

const nombrePaises = ["argentina","peru","chile"]
const paises = (arr) => {
  for (let i = 0; i < nombrePaises.length; i++) {
    console.log(nombrePaises [i]);
    
  }
}

//scope global
