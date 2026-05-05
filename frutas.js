//Lista ordenada de valores

const frutas = ["Maçã","Banana", "uva", "Manga"];


console.log(frutas);
console.log (frutas[0]);

frutas[0]="Abacaxi"
console.log(frutas);

frutas[2]="Laranja"
frutas[3]="Pera"
console.log(frutas);
console.log(frutas.length)
frutas.push("pessego");
console.log(frutas);

console.log(frutas.indexOf("pessego"));
console.log(frutas.indexOf("Laranja"));
