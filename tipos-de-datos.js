//imprimir en consola
console.log("hola mundo");

//declaracion de variables y asignacion de valores
var nombre = "Monica"; //string
var edad = 23; //number
var sueldo = 12.23; // number
var casada = true; //boolean
var hijos = null; // null
var dato; // undefined

//saber tipo de dato con typeof
console.log(typeof(edad));
console.log(typeof(sueldo));
console.log(typeof(casada));
console.log(typeof(hijos));
console.log(typeof(dato));

// la semantica es imprtante en el significado de las palabras
var pais = 20;
var nombre = "Francia";

//NaN(not a numbre)
console.log(10*"Monica");

// si ponemos typeof de null dira que es object pero en realidd es aucencia intencional de valor por un error en javascript que aun no se ha corregido


//Ejercicio campus
console.log("Primer ejercicio");
console.log(typeof(42));          // number
console.log(typeof('Veinticinco')); // string
console.log(typeof(-666));        // number
console.log(typeof(true));        // boolean
console.log(typeof(0));           // number
console.log(typeof(''));          // string
console.log(typeof(null));        // object (esto es un comportamiento histórico en JavaScript)
console.log(typeof(undefined));   // undefined
console.log(typeof(FALSE));       // undefined (ya que FALSE no está definido; JavaScript es sensible a mayúsculas y minúsculas)
console.log(typeof(NaN));         // number (NaN es un valor especial de tipo number)
console.log(typeof(Symbol()));    // symbol
console.log(typeof([1, 2, 3]));   // object (los arreglos son un tipo especial de objeto)
console.log(typeof({a: 1}));      // object (un objeto simple)
console.log(typeof(function() {})); // function (aunque las funciones son objetos, tienen un tipo distinto)
console.log(typeof(new Date()));  // object (la instancia de un objeto Date es un objeto)
console.log(typeof(/abc/));       // object (una expresión regular es un tipo especial de objeto)



