function cambiarTexto(){
    let titulo = document.getElementById('titulo');
    titulo.textContent = "Hola desde el DOM";
}

function cambiarTextoClase(){
    let parrafos = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "blue";
    }
    
}
//selecciona todos los elementos y luego con un for cambiamos el color de todos esos parrafos seleccionados

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p");
    parrafoDiv.textContent = "Texto cambiado dentro del div"
}

// selecciona el primer parrafo que se encuentra dentro de un div


function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach(items => {
        items.style.backgroundColor = "yellow"
    });
}

//selecciona todos los elementos li en una pagina y cambia su color de fondo a amarillo

