
// Genera un número aleatorio entre 0 y 100
let nota = Math.floor(Math.random() * 101);
console.log(nota);



// Evaluar la nota y mostrar el mensaje que le corresponde
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bien");
} else if (nota >= 60) {
    console.log("Suficiente");
} else {
    console.log("No aprobado");
}
