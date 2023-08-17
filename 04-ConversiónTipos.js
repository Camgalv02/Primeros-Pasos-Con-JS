//tipos de datos
//alfanuméricos 
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramón Silva";

//numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;


// lógico (true, false)
let boletoActivo = true;

//Operaciones Aritméticas
//Suma
//let totalBoletos = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;

//Orden de Precedencia
//()
//* y /
//+ y -
let totalBoletos = (valorBoleto + impuestoAeropuerto) + valorBoleto + impuestoAeropuerto * porcentajeTasaEmbarque + gestionAgencia;
//console.log(totalBoletos);

//Concatenación de Textos
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;

let pasaportePasajero = "1000" + "12";
let multiplicacion = parseInt("1000") / parseFloat ("10");

console.log(nombreCompleto);
console.log(multiplicacion);

//
let noEsUnNumero = parseInt("asd");
console.log(noEsUnNumero)