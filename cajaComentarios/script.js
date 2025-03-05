let formularioComentario = document.getElementById('formularioComentario');
let campoComentario = document.getElementById('campoComentario');
let divComentarios = document.getElementById('comentarios');

// Agregar comentario
formularioComentario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // No deja que se recargue la página
    let comentario = campoComentario.value.trim();
    if (!comentario) {
        alert('El comentario no puede estar vacío'); 
        return;
    }
    agregarComentario(comentario);
    campoComentario.value = ''; // Limpiar el campo de texto para que se pueda escribir un nuevo comentario
});

// Función para agregar un comentario
function agregarComentario(comentario) {
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `
        <p>${comentario}</p>
        <p><small><strong>Fecha y hora de publicación:</strong> ${new Date().toLocaleString()}</small></p>
        <button class="eliminarComentario">Eliminar comentario</button>
    `;
    divComentarios.appendChild(nuevoComentario);

    // Eliminar comentario
    nuevoComentario.querySelector('.eliminarComentario').addEventListener('click', () => {
        nuevoComentario.remove();
    });
}

