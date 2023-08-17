//Palabra Const
//Espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Oscar";
const apellidoPasajero = "Galvez";

console.log(nombrePasajero);
console.log(apellidoPasajero);

//Palabra let
//Espacio de memoria que pueda cambiar durante la ejecución del programa
//el alcance es local
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero); 

//Palabra var
//Espacio de memoria que pueda cambiar durante la ejecución del programa
//el alcance es global 
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;