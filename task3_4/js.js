// 3.4.1 Muestra con "forEach" los elementos de un array de nombres precedidos por su posición.

const nombres = ["Huguito", "Luca", "David", "Sergi", "Luca2"];

//Primer parámetro : El "valor"(el elemento dentro de la caja(array) ).
//Segundo parámetro: El "indice"(la posición o número de orden, empezando desde el 0).
//Tercer parámetro: Es el array entero que estamos recorriendo en ese momento
//No existe un cuarto parámetro si lo pones te saldrá: undefined -- nombres.forEach((nombre, indice, tercerParametro) =>{ console.log(`${indice+1}: ${nombre} -- ${tercerParametro}`); });
nombres.forEach((nombre, indice) =>{ 
    console.log(`${indice+1}: ${nombre}`); 
});


console.log("\n=============================================================\n")

// 3.4.2 A partir de un array de precios, crea con "map" un nuevo array aplicando un descuento del 15 %.
const preciosOriginales =[10,5.15, 24, 54, 509.99, 128, 78, 97];

// Usamos .map con una función flecha de una sola línea (retorno implícito)
const preciosConDescuento = preciosOriginales.map(precio => precio * 0.85);
//la variable "precio" agarra el primer valor del array en este caso el "10" y lo mete en "precio"
//hace la operación 10 * 0.85 y guarda el resultado (8.5).

console.log(preciosConDescuento);


console.log("\n=============================================================\n")

// 3.4.3 A partir de un array de palabras, conserva con "filter" aquellas que tengan cinco caracteres
// o más.
const palabras = ["user", "default", "computer", "thought", "desktop", "mousepad", "smartphone", "tv"];

// filter guarda la palabra si la condición (longitud mayor o igual a 5) es verdadera
const palabrasLargas = palabras.filter(palabra => palabra.length >= 5);
console.log(palabrasLargas); //output: ["default", "computer", "thought", "desktop", "mousepad", "smartphone"]


console.log("\n=============================================================\n")

// 3.4.4 Convierte un array de minutos en textos del tipo "2 h 15 min" mediante "map".
const arrayMinutos = [100, 145, 165, 25, 54, 67, 421, 123];

//Math.floor: redondea un nro con decimales hacia abajo
//console.log(2.1)  // output: 2
//console.log(2.5)  // output: 2  -- aunque este en la mitad, va hacia abajo
//console.log(2.99) // output: 2  -- Aqui esta mas cerca del 3, de todas formas dará 2

// Usamos map para transformar cada número en un texto
const textosTiempo = arrayMinutos.map(minutosTotales => {
    //Calculamos las horas enteras (ej: 135 / 60 = 2.25 -> se queda con 2 )
    const horas = Math.floor(minutosTotales / 60);
    
    //Calculamos los minutos sobrantes (el resto de la división = modulo de la división)
    const minsSobrantes = minutosTotales % 60;
    
    return `${horas}h ${minsSobrantes}min`;
});
console.log(textosTiempo);

console.log("\n=============================================================\n")

// 3.4.5 Encadena "filter" y "map" para obtener el cuadrado de todos los números positivos de un
// array.

const nrosPositviosyNegativos = [3, -12, 34, 12, 7, 18, 0, 43, -6, -14, 61, 99, -1];
const nrosPositvos = nrosPositviosyNegativos.filter(nro => nro > 0);
console.log(nrosPositvos) //Con .filter, creamos un nuevo array donde solo hay nros positivos

//ahora con .map recorremos todo el array y obtenemos el cuadrado de cada nro
const nroCuadrado = nrosPositvos.map(nro => nro ** 2);
console.log(nroCuadrado) //mostrará todos los nros multiplicados por si misoms: 3**3:9, 12**12:144

console.log("\n=============================================================\n")


// 3.4.6 Pide una palabra y filtra todas las cadenas de un array que la contengan, ignorando
// mayúsculas y minúsculas.

const palabras1 = ["JavaScript", "JaVa", "Python", "Ruby", "Django", "MYSQL", "c++", "c#"];
const buscarPalabra = "Va";

const resultado = palabras1.filter(p => p.toLowerCase().includes(buscarPalabra.toLowerCase()))
console.log(resultado)



/*to study:
foreach
filer
map
reduce
reduceRIGHT
FIND
some
EVERY
Sort
tosorted
toplitted

[].  <-- atajo para mostrar que hace cada cosa en visual
*/ 