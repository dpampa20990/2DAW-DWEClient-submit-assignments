// Activitat 3.6
// 3.6.1 Desestructura un array con nombre, primer apellido y segundo apellido. Asigna un valor
// predeterminado al segundo apellido.

/* La desustructuración es un atajo para extraer los valores de un array(o un objeto)
   y meterlos directamente dentro de variables individuales, todo en una sola linea de código */

// Creamos un array de prueba(en este caso solo tiene nombre y primer apellido)
const personaArray = ["Joan", "Ramis"];

// Desestructuramos el array por posición y asignamos el valor predeterminado usando "="
const [nom, primerCognom, segonCognom = "Desconegut"] = personaArray;

// Comprobamos el resultado en la consola: ctrl + shift + i
console.log(nom);            // Output: Joan
console.log(primerCognom);   // Output: Ramis
console.log(segonCognom);    // Output: Desconegut (toma el valor por defecto porque el array no tenía tercer elemento)

console.log("\n========================================================\n");

// 3.6.2 Separa el primer elemento de un array y guarda el resto mediante rest.
const colors = ["Vermell", "Blau", "Verd", "Groc", "Negre"];

// Desestructuramos: el primero va a 'primerElement', y los demás se agrupan en 'restaElements'
const [primerElement, ...restaElements] = colors; //el primer parametro tiene el primer valor del array, el segundo parametro junto con los tres puntos ... es el operador "rest" que almacena todo el contenido del array restante

// Comprobamos el resultado en la consola: ctrl + shift + i
console.log(primerElement);  // Output: Vermell
console.log(restaElements);  // Output: ['Blau', 'Verd', 'Groc', 'Negre']

console.log("\n========================================================\n");


// 3.6.3 Combina dos arrays y añade un elemento al principio y otro al final utilizando spread.
const array1 = ["Blau", "Verd"];
const array2 = ["Groc", "Negre"];

// Combinamos añadiendo un elemento al principio ("Vermell") y otro al final ("Blanc")
const colorsCombinats = ["Vermell", ...array1, ...array2, "Blanc"];

// Comprobamos el resultado en la consola: ctrl + shift + i
console.log(colorsCombinats); 
// Output: ['Vermell', 'Blau', 'Verd', 'Groc', 'Negre', 'Blanc']

console.log("\n========================================================\n");


// 3.6.4 Crea un objeto libro con título, autor, páginas y un método resumen() que muestre una
// frase descriptiva.
const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 120, //el nro de paginas varia según la edición, suele estar entre 96 y 121 páginas
    resumen(){
            console.log(`El libro '${this.titulo}', escrito por ${this.autor}, tiene un total de ${this.paginas} paginas.`);
    }
}
libro.resumen();

console.log("\n========================================================\n");

// 3.6.5 Crea un objeto contador con una propiedad valor y los métodos incrementar(),
// decrementar() y mostrar().
const contador = {
    valor: 0, // Propiedad inicializada en 0
    incrementar() {this.valor++; // Suma 1 al valor actual
    },
    decrementar() {
        this.valor--; // Resta 1 al valor actual
    },
    mostrar() {
        console.log(`El valor actual del contador es: ${this.valor}`);
    }
};

// diferentes funcionamientos en la consola:
contador.mostrar();       // Output: El valor actual del contador es: 0
contador.incrementar();   // Suma 1 (valor pasa a 1)
contador.incrementar();   // Suma 1 (valor pasa a 2)
contador.mostrar();       // Output: El valor actual del contador es: 2
contador.decrementar();   // Resta 1 (valor pasa a 1)
contador.mostrar();       // Output: El valor actual del contador es: 1

console.log("\n========================================================\n");

// 3.6.6 Copia un producto utilizando spread, modifica su precio y comprueba que el original no se
// ha modificado.
const productoOriginal = { //creamos un objeto 
    nom: "ratolí gamer",
    precio: 35.50,
    stock: 20
};

// clonamos el objeto original en uno nuevo usando Spread (...) -- al usar "spread" este desarma el objeto uno a uno y clona sus elementos uno a uno dentro de las nuevas llaves {  }.
const productoClonado = { ...productoOriginal }; //productoClonado <-- ahora es un objeto independiente si se modifica algun valor del objeto no afecta al otro objeto, ambos son independientes.

//Modificamos el precio del producto clonado
productoClonado.precio += 10.00; //le sumamos 10 a el precio: 35.50 + 10.00 = 45.50

//Comprobamos en la consola que el original NO ha cambiado
console.log("Original:", productoOriginal.precio); // Output: Original: 35.50
console.log("Clonado:", productoClonado.precio);   // Output: Clonado: 45.50



