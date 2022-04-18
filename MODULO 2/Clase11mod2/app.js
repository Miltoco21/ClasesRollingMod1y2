//Pedir prompt hacer bucle y guardar datos desde arreglos
const plantas = ["Ficus", "Cactus", "Jazmin"];
let listaPlantasSeleccionadas = [];

/*const plantaSeleccionada = prompt(
  "Seleccione un producto : 0=Ficus, 1=Catus, 2=Jazmin"
);
*/
console.log(plantaSeleccionada);
console.log(plantas[plantaSeleccionada]);

console.log(listaPlantasSeleccionadas);

console.log(listaPlantasSeleccionadas);

do {const plantaSeleccionada = prompt(
  "Seleccione un producto : 0=Ficus, 1=Catus, 2=Jazmin"
);
listaPlantasSeleccionadas.push(plantas[plantaSeleccionada])  
} while (confirm("Quiere agregar otro producto"));
console.log(listaPlantasSeleccionadas);
//const Nombrefuncion = (parametros) =>{}
