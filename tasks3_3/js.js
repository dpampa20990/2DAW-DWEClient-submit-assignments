// Activitat 3.3

// 3.2.1 Crea una funció executarOperacio(a, b, callback) i prova-la amb callbacks per sumar,
// restar i calcular el màxim.

function executarOperacio(a,b,callback){
    let resultat = callback(a,b);
    console.log("El resultat de l'operació és: "+resultat);
}

const sumar = (x,y) => x+y;
const multiplicar = (x,y) => x*y;
const division = (x,y) => x/y;
const resta = (x,y) => x-y;
const nro_mayor = (x,y) =>{
    if (x>y) return x
    if (x<y) return y
    return x
}
executarOperacio(5,6,sumar);
executarOperacio(5,6,multiplicar);
executarOperacio(12,3,division);
executarOperacio(12,3,resta);
executarOperacio(15,26,nro_mayor);

//======================================================================

// 3.2.2 Crea un array amb cinc temperatures. Mostra-les amb for i torna-les a mostrar amb for...of.
const array = [25.5, 23, 12.14, 37,5]
console.log("\nArray de temperaturas con for nomal:");
for(let i=0;i<array.length;i++){
    console.log(array[i]+"\n")
}

console.log("\nArray de temperaturas con for of:");
for(const a of array){
    console.log(a+"\n")
}

//======================================================================

// 3.2.3 Calcula manualment la suma, la mitjana, el valor màxim i el valor mínim d’un array de
// nombres.
let nros = [13, 15.13, 32.12, 23, 77.75, 12.14, 7.68, 26.00, 37.5];
let suma = 0;
let mitjana = 0;
let maxim = 0;
let minim = nros[0];
for(const n of nros){
    if(n > maxim) maxim = n;
    if(n < minim) minim = n;
    suma += n;
}
mitjana = suma/nros.length;
console.log("\nSuma de los nros del array: "+suma);
console.log("mitjana de los nros del array: "+mitjana.toFixed(2)); //.toFixed() corta los decimales tambien transforma Number a String
console.log("nro maximo del array: "+maxim);
console.log("nro minimo del array: "+minim);

//======================================================================

// 3.2.4 Crea una funció comptarMajorsQue(valors, limit) que retorni quants elements superen el
// límit.
function comptarMajorsQue(valors, limit){
    let count = 0;
    for(const v of valors){
        if(v<limit) count++;
    }
    return count;
}
let resultat = comptarMajorsQue([13,32, 4.3, 7.1, 12.14, 6.58, 7.49, 11.00, 7.50], 7.50);
console.log("\nCantidad de valores que superan el nro limite: "+resultat);


//======================================================================

// 3.2.5 Crea una funció transformarArray(valors, callback) que construeixi i retorni un array nou
// aplicant el callback a cada element.
console.log("\n=============================================================");
function transformarArray(valors, callback){
    let nouArray = [];
    for(const v of valors){
        nouArray.push(callback(v)); // aplicamos el callback a cada elemento
    }
    return nouArray;
}

// Ejemplos de callbacks que podemos pasarle:
function doble(n){ return n * 2; }
function aEuros(n){ return n.toFixed(2) + " €"; }
function alCuadrado(n){ return n * n; }


//uso
let notas = [4.3, 7.1, 12.14, 6.58];

let resultado1 = transformarArray(notas, doble); //devuelve cada nro del array multiplicado x 2
console.log(resultado1); // [8.6, 14.2, 24.28, 13.16]

let resultado2 = transformarArray(notas, aEuros);
console.log(resultado2); // ["4.30 €", "7.10 €", "12.14 €", "6.58 €"]

let resultado3 = transformarArray([2, 3, 4], alCuadrado);
console.log(resultado3); // [4, 9, 16]


// También podemos pasarlo directo sin crear la función antes:
let resultado4 = transformarArray(notas, (n) => n > 7);
console.log(resultado4); // [false, true, true, false]

//Función flecha:
// let resultado4 = transformarArray(notas, (n) => n > 7);

//Es exactamente lo mismo que esto:
// function esMayorQue7(n){
//     return n > 7;
// }
// let resultado4 = transformarArray(notas, esMayorQue7);

// La flecha (n) => n > 7 significa:
// (n) -> recibe un parámetro n (cada número del array)
// => -> devuelve
// n > 7 -> el resultado de comparar










