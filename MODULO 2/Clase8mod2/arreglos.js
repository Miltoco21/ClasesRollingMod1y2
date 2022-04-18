// [elemento, otro, otro]

 const frutas = ["manzana", "banana", ["naranja", "pomelo"], "frutilla"];

 console.log(frutas);

 const someFrutas = frutas[2];
 console.log(`La fruta preferida es: ${someFrutas[1]}`);

 console.log(someFrutas);
 console.log(someFrutas[0]);

const frutass = ["manzana", "banana", "pomelo", "frutilla"];

 console.log(frutas[0]);
 console.log(frutas[1]);
 console.log(frutas[2]);
 console.log(frutas[3]);
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}