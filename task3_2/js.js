

/* 
Validación de las horas
Una hora será válida si:
● Tiene exactamente cinco caracteres.
● El tercer carácter es :.
● Las horas están comprendidas entre 00 y 23.
● Los minutos están comprendidos entre 00 y 59.
Si alguna hora no es válida, el programa debe volver a pedirla.
*/

const entrada = document.getElementById("entrada"); //hora entrada
const salida  = document.getElementById("salida");  //hora salida
let mensaje = document.getElementById("mensaje"); //
const opcion  = document.getElementById("opcion");  //
const btn     = document.getElementById("btn");     //enviar los datos ingresados
const error_opcion = document.getElementById("error_opcion");
const mostrar = document.querySelector(".mostrar"); //donde escribiremos el resultado en pantalla


function esHoraValidaEntrada(hora){ //NaN <-- Not a Number
    if(hora.length!==5 || hora[2] !== ":") return false; //Validamos una longitud no mayor a 5 y que la posición [2] sea un " : "
    if( ( (Number(hora.slice(0,2)))   < 0 ||  (Number(hora.slice(0,2)))   > 23 ) || Number.isNaN( Number(hora.slice(0,2))  ) ) return false //validamos que las horas ingresadas no sean menor que 0 y mayhor que 23 y tambien que no se ingrese otro caracter que no sea un nro   
    if( ( (Number(hora.substring(3))) < 0 ||  (Number(hora.substring(3))) > 59 ) || Number.isNaN( Number(hora.substring(3))) ) return false //validamos que los minutos ingresadss no sean menor que 0 y mayhor que 59 y tambien que no se ingrese otro caracter que no sea un nro  
    return true; //si es corrcto el formato ingresado
}
//probar funcion 
// let hora = "23:60" 
// console.log(esHoraValidaEntrada(hora))


function convertirAMinutos(hora) {
    // 86400 segundos x dia   |   1440  minutos  x dia
    let array = hora.split(":"); //creamos con .split el array llamado "array" separado por " : "
    
    let horas_a_minutos = Number(array[0]) * 60;
    let minutos_totales = horas_a_minutos + Number(array[1]);
    // console.log( horas_a_minutos);
    // console.log( typeof minutos_totales);
    return minutos_totales;
}
// let hora = "15:10";
// let resultado = convertirAMinutos(hora);
// console.log(resultado);


function calcularDuracion(entrada, salida) {
    let entradaMin = convertirAMinutos(entrada);
    let salidaMin = convertirAMinutos(salida);
    //Horas entre un dia y al dia siguiente
    // entrada 23:50   1430 minutos  (1440 - 1430) = 10
    // salida  00:30   30   minutos  (30 + 10) -> 40 minutos
    // //-----------
    // Horas en el mismo dia
    // entrada 15:10   910 minutos
    // salida  15:30   930 minutos   930 - 910 -> 20 minutos

    let duracion = 0;
    if(entradaMin > salidaMin){
        duracion = (1440 - entradaMin) + salidaMin;//consideramos tambien el dia siguiente
    }else if(entradaMin < salidaMin){ //si Las horas son en el mismo dia
        duracion = salidaMin - entradaMin;
    }
    return duracion;
}


function calcularImporteBase(minutos) {
  if (minutos <= 30) return 0;
  let total = 0;
  let resto = minutos - 30; // quitamos lo gratis
  
  let tramo1 = Math.min(resto, 90); // Tramo 1: 31-120 (90 minutos máximo)
  total += tramo1 * 0.03;
  resto -= tramo1;
  if (resto <= 0) return total;

  let tramo2 = Math.min(resto, 180);  // Tramo 2: 121-300 (180 minutos máximo)
  total += tramo2 * 0.02;
  resto -= tramo2;
  if (resto <= 0) return total;

  total += resto * 0.01;  // Tramo 3: 301 en adelante
  
  if (total > 18) { //como maximo 18€
      total = 18;
  }

//    return Math.min(total, 18); //otra forma de hacerlo en vez del: if(total>18){total=18}
//ya que el Math.min elegira siempre el menor entre ambos

  return total;
}
// console.log(calcularImporteBase(165)); // 3.6 -> 2,70 + 0,90 como tu foto
// console.log(calcularImporteBase(40));  // 10 min * 0,03 = 0,30
// console.log(calcularImporteBase(350)); // 30 gratis + 90*0.03 + 180*0.02 + 50*0.01 = 6,80


function sinDescuento(importeBase){
    return importeBase; // es el 100%
}

function descuentoElectrico(importeBase){
    return importeBase * 0.80; // pagamos el 80%, 20% descuento por ser electrico
}

function descuentoResidente(importeBase){
    return importeBase * 0.70; // pagamoss el 70%, 30% descuento por ser residente
}

function calcularImporteFinal(importeBase, funcionCallback) {
    return funcionCallback(importeBase);
}


btn.addEventListener("click", () => {
    // Limpiamos desde el principio
    mensaje.textContent = "";
    error_opcion.textContent = "";
    mostrar.innerHTML = ""; // de esta forma no se acumulan los resúmenes con +=


    if(!esHoraValidaEntrada(entrada.value) || !esHoraValidaEntrada(salida.value) ){
        mensaje.textContent= "Error tienes que ingresar un formato valido de hora" //con "".innerHTML" se deplicaria una y otra vez el texto si ingresas el formato no valido, con "".textContent" solo se muestra una sola vez  
        entrada.value = ""; //limpiamos la entrada
        salida.value  = ""; //limpiamos la salida
        entrada.focus(); //el cursor
        return; //si no se cumple con lo establecido
    }

    // let entrada_minutos = convertirAMinutos(entrada.value); //variable no util porque dentro de calcularDuracion() ya convertimos a minutos la entrada ingresada por pantalla
    // let salida_minutos = convertirAMinutos(salida.value);   //variable no util porque dentro de calcularDuracion() ya convertimos a minutos la salida ingresada por pantalla

    let duracion_minutos = calcularDuracion(entrada.value, salida.value);
    let importe_base_decimal = calcularImporteBase(duracion_minutos);
    let importe_base = Math.ceil(importe_base_decimal * 100) / 100;

    let opcionValor = Number(opcion.value.trim()); //convertimos a Number sin antes primero extraer el valor del input y quitarle espacios al inicio y al final
      if(opcionValor === "" || ![1,2,3].includes(Number(opcionValor))){
        error_opcion.textContent = "Error: selecciona 1, 2 o 3 en el descuento";
        opcion.value = "";
        opcion.focus();
        return;
    }


    let funcionCallback; //variable que almacenará una funcion sin ejecutar
    let textoDescuento;  //texto que se alamena segun la opción elegida
    switch(opcionValor){ 
        case 1: funcionCallback = sinDescuento; textoDescuento = "Sin descuento (0%)"; break; //guarda la función sin Descuento y el "textoDescuento" dentro de la variable "funcionCallback", que ahora sera una función sin ejecutar ya que no se usa: ()
        case 2: funcionCallback = descuentoElectrico; textoDescuento = "Vehículo eléctrico (-20%)"; break; //los almacena como función sin ejecutar, en este punto: funcionCallback = descuentoElectrico
        case 3: funcionCallback = descuentoResidente; textoDescuento = "Residente (-30%)"; break;
    }

    // Ahora lo pasamos como callback
    let totalFinal = calcularImporteFinal(importe_base, funcionCallback);
    // el tope es 18 ya está dentro de calcularImporteBase, y redondeo a 2 decimales
    totalFinal = Math.round(totalFinal * 100) / 100;

    mostrar.innerHTML += `<br><br>
                         <h4>RESUMEN DEL ESTACIONAMIENTO</h4>
                         <p>Entrada: ${entrada.value}</p>
                         <p>Salida: ${salida.value}</p>
                         <p>Duración: ${duracion_minutos} minutos</p>
                         <p>Importe base: ${importe_base.toFixed(2)} €</p>
                         <br><p>Descuento: ${textoDescuento}</p>
                         <p>Descuento en €: ${(importe_base - totalFinal).toFixed(2)}€</p>
                         <h3>TOTAL: ${totalFinal.toFixed(2)} €</h3>
                         `

});


















































































