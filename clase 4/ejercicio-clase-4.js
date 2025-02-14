let librosLeidos = [];

// Declaro mi función agregarLibro
function agregarLibro(tituloLibro) {
    librosLeidos.push(tituloLibro); // Agregamos un elemento al arreglo
}

// Agregamos algunos libros
agregarLibro("El principito");
agregarLibro("Las mujeres que amaban demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(librosLeidos); // Imprimimos el arreglo

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(librosLeidos[i]);
    }
}

// Llamamos a la función para mostrar los libros leídos
mostrarLibrosLeidos();

console.log("------");

// Agregamos más libros
agregarLibro("El alquimista");
agregarLibro("La chica del tren");
agregarLibro("The Eras Tour Book");
agregarLibro("El principito");

// Mostramos los libros leídos nuevamente
mostrarLibrosLeidos();