/* Funcion para Contacto */
function mostrarError(msj){
    const mostrarLeyenda = document.createElement('p')
    mostrarLeyenda.textContent = msj
    mostrarLeyenda.classList.add('error')
    const modal = document.querySelector('#content')
    modal.appendChild(mostrarLeyenda)
}

function enviarConsulta(evt){
    evt.preventDefault()

    const comentario = document.querySelector('#comentario').value
    comentario === ''&& mostrarLeyenda("Debe realizar una Consulta")
}

formulario.addEventListener('submit', enviarConsulta);

