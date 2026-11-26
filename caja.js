const prompt = require("prompt-sync")();

let total = 0;
let cantidad = 0;
let precio;

do {
   precio = prompt("Ingrese el precio del producto (0 para finalizar):");
    if (precio === null) {
        break;
    }

  if (isNaN(precio) || precio < 0) {
    console.log("Error: ingrese un precio válido y positivo.");
    continue;
  }

  if (precio !== 0) {
    total += precio;
    cantidad++;
  }

} while (precio !== 0);

console.log("DETALLES DE LA COMPRA");
console.log("Cantidad de productos registrados: " + cantidad);
console.log("Total a pagar: $" + total);