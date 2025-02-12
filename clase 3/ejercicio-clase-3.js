
let frutas = ["Manzana", "Platano", "Manzana", "Uva", "Uva", "Platano", "Fresa", "Platano"] //arreglo con frutas

let contador = {} //objeto

for (let i = 0; i<frutas.length; i++){ //recorrer el arreglo
    let fruta = frutas[i];
    if(contador[fruta]){ // si la fruta ya existe, incrementa contador
        contador[fruta]++
    }else{
        contador[fruta] = 1; // si no existe inicializa contador a 1
    }
}

console.log("Conteo de frutas usando ciclo for: ");

for(let fruta in contador){ //imprime la cantidad de cada tipo
    console.log(`${fruta}: ${contador[fruta]}`);
}