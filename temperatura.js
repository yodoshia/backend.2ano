//conversor de temperatura
const cidade = "Curitiba";
let tempCelsius = 26;

const tempFahrenheit = tempCelsius * (9/5) + 32;
const tempkenvin = tempCelsius + 273.15;

console.log(`A tempratura de ${cidade} está ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit.toFixed(1)} fº`);
console.log(`Kelvin: ${tempkenvin.toFixed(1)} Kº`);