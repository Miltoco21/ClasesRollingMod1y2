//WHILE (Mientas que la condicion se cumpa el ciclo se repite, siempres se debe definir limite o escape

let i = 1;

while (i < 10) {
  console.log(`El valor de i antes: ${i}`);
  // i = i + 1;
  i++;
}

// DO WHILE  acá va el cuerpo del ciclo, el código que se va a repetir al menos una vez y mientras la condición se cumpla
let j = 1;
do {
  console.log(`El valor de j antes: ${j}`);
  // acá va el cuerpo del ciclo, el código que se va a repetir al menos una vez y mientras la condición se cumpla
  j++;
} while (j <= 6);

//FOR Junta un inciador,una condicion y incrementador
//for (<inicialización definicon de la variable>; <condición>; <incrementador>) {}
// el cuerpo del ciclo, el código que se repite mientras que la    condición sea verdadera;


for (let k = 1; k < 10; k++) {
  console.log(`El valor de k antes: ${k}`);
}

  
