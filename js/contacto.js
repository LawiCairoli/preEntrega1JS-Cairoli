/* Funcion para Contacto */
const formulario = document.querySelector('#formulario');
const listaComentarios = document.querySelector("#usrComent");
let comentarios = [];

function mostrarError(msj){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = msj
    mensajeError.classList.add('error')
    const modal = document.querySelector('#content')
    modal.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000);

}

function agregarComentario(evt) {
    evt.preventDefault()
    console.log("agragaste un comentario")
    const comentario = document.querySelector("#comentario").value;
    comentario === '' && mostrarError("Deber ingresar un comentario")

    
    const objComentario = {
        id: Date.now(),
        texto: comentario
    }
    comentarios.push(objComentario);
    formulario.reset()
    console.log(comentarios);
    dibujarHTML();

}

function dibujarHTML(){
    limpiarComentarios();
    comentarios.forEach( item => {
        const btnBorrar = document.createElement('a');
        btnBorrar.classList.add("borrar-comentario");
        btnBorrar.textContent = ' Eliminar '
        
        const li = document.createElement('li');
        li.textContent = item.texto;
        li.setAttribute('id', item.id)

        li.appendChild(btnBorrar)
        listaComentarios.appendChild(li)
    })

    sincronizarStorage()
}	

function sincronizarStorage(){
    localStorage.setItem('comentarios', JSON.stringify(comentarios))
}

function limpiarComentarios(){
    while(listaComentarios.firstChild){
        listaComentarios.removeChild(listaComentarios.firstChild)
    }
}

function borrarComentario(evt){
    evt.preventDefault()
    console.log(evt.target.parentElement.id)
    const id = evt.target.parentElement.id;
    comentarios = comentarios.filter( comentario => comentario.id != id);
    dibujarHTML()
}

formulario.addEventListener('submit', agregarComentario);
listaComentarios.addEventListener('click', borrarComentario)


document.addEventListener('DOMContentLoaded', ()=> {
    comentarios = JSON.parse(localStorage.getItem('comentarios')) || []
    dibujarHTML()
})


for (const sucursal of sucursales){
    console.log('/ '+sucursal.localidad +' '+sucursal.domicilio+' ')
}