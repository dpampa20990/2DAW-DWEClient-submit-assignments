// Activitat 3.5
// 3.5.1 Utiliza find para obtener la primera temperatura inferior a cero 
// y controla el caso en el que no exista.
const temperaturas = [30.5, 12.14, -5, 18, -14, 20, 16];
const temperaturaNegativa = temperaturas.find(temp => temp < 0)

if(temperaturaNegativa !== undefined){
    console.log("La primera temperatura inferior a 0 es: "+temperaturaNegativa);
}else{
    console.log("No se ha encontrado ninguna temperatura inferior a cero.");
}

console.log("\n=============================================================\n")

// 3.5.2 Comprueba con some si un array contiene algún múltiplo de 5.

const arrayNros = [12, 25, 30, -20, 18, 34]; //incluso el nro negativo -20 es multiplo de 5
const Multiplode5= arrayNros.some(nro => nro % 5 === 0 );
console.log("Existe algun nro multiplo de 5?: "+Multiplode5)

console.log("\n=============================================================\n")

// 3.5.3 Comprueba con every si todas las contraseñas de un array tienen al menos ocho
// caracteres.
const password =["userSecure!2026","test123", "password4321"];
const mayor8 = password.every(p => p.length >= 8); // Basta que alguno no cumpla con algo que pida el .every dará false
if(mayor8){
    console.log("Todas las constraseñas tienen 8 o mas caracteres: "+mayor8);
}else{
    console.log("Alguna de todas las contraseñas del array no tiene 8 caracteres: "+mayor8)
}

console.log("\n=============================================================\n")

// 3.5.4 Calcula con reduce el total y la media de un array de gastos.
const gastos = [12.5, 45, 9.99, 105.4, 22.1];

// Calculamos el total usando reduce
const totalGastos = gastos.reduce((acumulador, gastoActual) => acumulador + gastoActual, 0);

//Calculamos la media dividiendo el total por la cantidad de elementos
const mediaGastos = totalGastos / gastos.length;

console.log(`Total de gastos: ${totalGastos}€`);
console.log(`Media de gastos: ${mediaGastos.toFixed(2)}€`); 
// .toFixed(2) -- para mostrar solo 2 decimales en el dinero



console.log("\n=============================================================\n")


// 3.5.5 Ordena una copia de un array de números de mayor a menor sin modificar el original.
const numeros = [30.5, 12.14, -5, 18, -14, 20, 16];

// Creamos una copia con spread ... o con slice()  
const copiaOrdenada = [...numeros].sort((a, b) => b - a);
// a - b = menor a mayor, b - a = mayor a menor

console.log("Original: ", numeros); // [30.5, 12.14, -5, 18, -14, 20, 16] El mismo array original sin modifica nada
console.log("Copia ordenada mayor a menor: ", copiaOrdenada); // [30.5, 20, 18, 16, 12.14, -5, -14]

// Otra forma igual de válida:
const copiaOrdenada2 = numeros.slice().sort((a, b) => b - a);
console.log("Segunda forma de copia ordenada de Mayor a Menor: ",copiaOrdenada2);

console.log("\n=============================================================\n")

// 3.5.6 A partir de un array de palabras, encuentra la primera que empiece por vocal, comprueba
// si todas tienen contenido y calcula el número total de caracteres.
const palabras = ["hola", "coche", "", "avión", "ordenador", "uva", "ramis"];
const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

// Primera que empiece por vocal: usando .find
const primeraVocal = palabras.find(palabra => {
    let primeraLetra = palabra.trim()[0]; // primera letra sin espacios
    return primeraLetra && vocales.includes(primeraLetra);
});

if (primeraVocal !== undefined) {
    console.log(`La primera que empieza por vocal es: "${primeraVocal}"`);
} else {
    console.log("Ninguna empieza por vocal");
}

// Comprobamos si todas tienen contenido: usando el .every
// "tener contenido" = que después de .trim() no esté vacía
const todasConContenido = palabras.every(p => p.trim().length > 0);
console.log(`¿Todas tienen contenido? ${todasConContenido}`); // false por el ""

// Número total de caracteres - con reduce
const totalCaracteres = palabras.reduce((a, p) => a + p.length, 0);
console.log(`Total de caracteres (incluyendo vacías): ${totalCaracteres}`);

// Si queremos el total solo de las que tienen contenido y sin espacios:
const totalReal = palabras
    .filter(p => p.trim().length > 0) // quitamos las vacías
    .reduce((a, p) => a + p.trim().length, 0);

console.log(`Total de caracteres reales: ${totalReal}`);




