

let verduras = ["lechuga", "tomate", "cebolla", "jitomate", "papa", "pimiento"]; // arreglo con datos

console.log(verduras[2]);
console.log(verduras.length);

for(i = 0; i<verduras.length; i++){
    console.log(verduras[i]);
}

console.log("metodos arreglo");
let personas = []; //arreglo vacio
personas.push("monica");
personas.push("daniel");
personas.push("juan");

console.log(personas);

personas.pop(); // elimina el ultimo
console.log(personas);

personas.unshift("alex"); //agrega elemento al inicio del array
personas.unshift("yola");


console.log(personas);

personas.shift(personas); // elimina primer elemento del array

personas[1] ="ana";
console.log(personas);