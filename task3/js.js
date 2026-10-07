// Activitats UD03 — JavaScript avançat: arrays, funcions i objectes

// Activitat 3.1 Analitzador de nombres

// Dissenya un programa que demani a l’usuari un nombre enter positiu i n’analitzi algunes
// propietats matemàtiques.
// El programa ha de comprovar que el valor introduït sigui un nombre enter major que zero. Si no
// és vàlid, l’ha de tornar a demanar.

// Una vegada validat, el programa ha d’indicar:
// ● Si el nombre és parell o senar.
// ● Si és primer.
// ● Quins són els seus divisors propis.
// ● La suma dels seus divisors propis.
// ● Si és un nombre perfecte, abundant o deficient.
 
const input = document.getElementById("nro");
const btn = document.getElementById("btn");
const resultatDiv = document.getElementById("resultat");

function esParell(numero){
    return numero % 2 === 0;
}

//Un nro primo es un nro entero mayor que 1 que solo tiene dos divisores positivos distintos: el nro 1 y el mismo.
//El nro mas pequeño: El primer nro primo es el 2, y es el único número primo que también es par.
//El nro 1 no se considera primo porque no tiene dos divisores distintos. solo se puede dividir por 1.
//los nros que tienen mas de dos divisores(como el 4, el 6 o el 9) se llaman "números compuestos". 
function esPrimer(numero){ //esPrimer -- esPrimo
    if(numero<2) return false;
    if(numero===2)return true;
    if(numero%2===0)return false;//nros pares >2 no son primos

    for(let i=3; i<=Math.sqrt(numero); i+=2){
        if(numero%i===0)return false;
    }
    return true;//si no se encontro ningun divisor, es primo
}

function obtenirDivisorsPropis(numero) {
  // Al no poder usar los Arrays, concatenamos los String
  let divisorsPropis = ""; //empezamos en 1
  for(let i=1; i<numero;i++){
        if(numero%i===0){
            divisorsPropis += `${i}, `
        }
  }
  return divisorsPropis;
}

function sumaDivisorsPropis(numero) {
  let suma = 0;
  for (let i = 1; i < numero; i++) {//
    if (numero % i === 0) {
      suma += i;
    }
  }
  return suma;
}

function classificarNombre(numero) {
  const suma = sumaDivisorsPropis(numero);
  if (suma === numero) return "perfecte";
  else if (suma > numero) return "abundant";
  else{return "deficient";} //
}


btn.addEventListener("click", () => {
  const valor = input.value.trim(); //extraemos el valor y le quitamos espacios
  const n = Number(valor); //lo convertimos a number porque input da un dato de tipo String

  if (n <= 0) {
    resultatDiv.innerHTML = `<p class="error">Error: has d'introduir un enter major que 0. Has posat "${valor}"</p>`;
    input.value = ""; //limpiamos el input
    input.focus(); //hacemos que se enfoque el cursor para volver a introducir otro nro valido
    return; //
  }

  //
  const parell = esParell(n);
  const primer = esPrimer(n);
  const divisors = obtenirDivisorsPropis(n);
  const suma = sumaDivisorsPropis(n);
  const classificacio = classificarNombre(n);

  //usamos los template literals para mostrar en pantalla el resultado de todos los calculos
  resultatDiv.innerHTML = `
    <h4>ANÀLISI DEL NUMERO ${n}</h4>
    <p>${parell? 'És parell.' : 'És senar.'}</p> 
    <p>${primer? 'És primer.' : 'No és primer.'}</p>
    <p>Divisors propis: ${divisors}</p>
    <p>Suma dels divisors propis: ${suma}</p>
    <p>El numero ${n} és ${classificacio}.</p>
  `;
});

