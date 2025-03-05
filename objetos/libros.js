// Definición del objeto libro
function Libro(titulo, autor, anio, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];  // Almacena los capítulos del libro

    // Describir el libro
    this.describirLibro = function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    };

    // Agregar un capítulo
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado.`);
    };

    // Eliminar un capítulo
    this.eliminarCapitulo = function(capitulo) {
        const indice = this.capitulos.indexOf(capitulo);
        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo "${capitulo}" eliminado.`);
        } else {
            console.log(`El capítulo "${capitulo}" no se encuentra en la lista.`);
        }
    };

    // Mostrar la lista de capítulos
    this.mostrarCapitulos = function() {
        if (this.capitulos.length > 0) {
            console.log("Capítulos del libro:");
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
        } else {
            console.log("No hay capítulos en el libro.");
        }
    };
}

// Crear un objeto libro
const miLibro = new Libro('Los juegos del Hambre', 'Collins Suzanne', 2021, 'disponible');

miLibro.describirLibro();

miLibro.agregarCapitulo('Capítulo 1: Los tributos');
miLibro.agregarCapitulo('Capítulo 2: El victorioso');
miLibro.mostrarCapitulos();

miLibro.eliminarCapitulo('Capítulo 1: Los tributos');
miLibro.mostrarCapitulos();
