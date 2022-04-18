//ejercicio 1
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "sept",
  "octubre",
  "noviembre",
  "diciembre",
];

const imprimir = (listaMeses) => {
  for (let i = 0; i < listaMeses.length; i++) {
    document.write(`${listaMeses[i]} <br>`);
  }
};
imprimir(meses);
