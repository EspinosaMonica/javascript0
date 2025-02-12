//tipo de mascotas
//condicionales (jaula grande || jaula mediana || jaula pequeña)

let TipoDeMascota = "Perro";

if(TipoDeMascota === "Perro"){
    console.log("si tienesun perro necesitas la jaula grande.");

   } else if(TipoDeMascota === "Gato"){
    console.log("si tienes un GAto necesitas la jaula mediana.");
   } else if(TipoDeMascota === "Hamster"){

    console.log("si tienes un Hamster necesitas la jaula pequeña.")
   } else {
    console.log("no tenemos jaula para ese tipo de animal")
   }


//ejercicio semaforo

let ColorSemaforo = "Rojo";

if (ColorSemaforo === "Rojo") {
    console.log("Alto.");
} else if (ColorSemaforo === "Amarillo") {
    console.log("Detente.");
} else if (ColorSemaforo === "Verde") {
    console.log("Avanza.");
} else {
    console.log("El semaforo no tiene ese color.");
}


let creditos = 10;
let promedio = 7.5;

if (creditos >= 10 && promedio >= 7.5){
    console.log("tienes derecho a una beca");
}else if (creditos<10){
    console.log("te hacen falta creditos");
}else if (promedio<7.5){
    console.log("debes de subir tu promedio");
}
else{
    console.log("no tienes derecho a una beca");
}