// notacion literal de Objetos

let auto = {
  color: ["rojo", "negro"],
  modelo: "argo",
  potencia: "120 hp",
  marca: "Fiat",
  año: 2020,
};
console.log(auto["modelo"]);
//console.log(auto.color[1]);
//for (let i = 0; i < auto.color; i++) {
//  console.log(auto.color[i]);

//agregar propiedad al objeto
auto.numeroPuertas = 5;
auto.precio = 15000;
// modificar propiedad
auto.modelo = "palio";
auto.color[0] = "amarillo";
//eliminar propiedades
delete auto.numeroPuertas;

console.log(auto);

//////Array de objetos//////
let personas = [
  {
    name: "Milton",
    lastName: "Peña",
    peso: 75,
    altura: 1.7,
  },
  {
    name: "Mel",
    lastName: "Lopez",
    peso: 75,
    altura: 1.7,
  },
  {
    name: "carlos",
    lastName: "perez",
    peso: 77,
    altura: 1.8,
  },
  {
    name: "ariel",
    lastName: "jara",
    peso: 77,
    altura: 1.9,
  },
];
console.log(personas);
personas.push(auto); //agrega objeto al array
console.log(personas[0]);
console.log(personas[0].lastName); //infreso a la propiedad
personas.map((persona) => {
  console.group(persona.lastName);
  console.log(`Apellido:${personas.lastName}`);
  console.log(`Peso:${personas.lastName}`);
  console.log(`altura:${personas.altura}`);
  console.groupEnd();
});
//RECORRIENDO OBJETO
for (var llave in auto) {
  console.log(auto[llave]);
}
//FuncionConstructora - this 
function Persona(name, lastName, age) {
  this.nombre = name;
  this.apellido = lastName;
  this.edad = age;
  //creando metodos
  this.correr = (x)=>{
    alert("corriendo")
  } 
}
//new llama a funcion constructora
let nombreP = "jose"
let apellidoP = "Lopez"
let edadP = 23
let persona1 = new Persona(nombreP,apellidoP,edadP)
console.log(persona1);
let persona2 =new persona("ale","busi", 28)
