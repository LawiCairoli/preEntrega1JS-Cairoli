const divFor = document.querySelector('#formularios');
const nuevoUsuario = document.querySelector('#logueo');
const logueo = document.querySelector('#ingreso');

nuevoUsuario.addEventListener('click', usuarioNuevo);
logueo.addEventListener('click', ingresar);

function eliminarBotones() {
    let eliminar = document.querySelector('.botones-centrales')
    eliminar.remove()
}

function usuarioNuevo(e) {
    e.preventDefault()
    eliminarBotones()
    let formRegistro = document.createElement('div');
    formRegistro.classList.add("container");
    formRegistro.innerHTML = `
        <h2 id="name-form">Registro de usuario</h2> 
        <form> 
            <label for="nombre">Nombre:</label> 
            <input class="entrada" type="text" id="nombre" name="nombre" required><br><br> 
            <label for="apellido">Apellido:</label> 
            <input class="entrada" type="text" id="apellido" name="apellido" required><br><br> 
            <label for="email">Correo electrónico:</label> 
            <input class="entrada" type="email" id="email" name="email" required><br><br> 
            <label for="telefono">Teléfono:</label>  
            <input class="entrada" type="tel" id="telefono" name="telefono"><br><br> 
            <label for="contraseña">Contraseña:</label> 
            <input class="entrada" type="password" id="contraseña" name="contraseña" required><br><br>  
            <input class="entrada" id="enviar" type="submit" value="Registrarse">  
        </form> `;
    divFor.appendChild(formRegistro);
}

function ingresar(event){
    event.preventDefault()
    eliminarBotones()
    let formIngreso = document.createElement('div');
    formIngreso.classList.add('container');
    formIngreso.innerHTML = `
    <h2 id="name-form">Ingresa al sistema</h2> 
    <form> 
        <label for="usuario">Usuario:</label> 
        <input class="entrada" type="text" id="usuario" name="usuario" required><br><br> 
        <label for="contraseña">Contraseña:</label> 
        <input class="entrada" type="password" id="contraseña" name="contraseña" required><br><br>  
        <input class="entrada" id="enviar" type="submit" value="Ingresar">    
    </form>`;
    divFor.appendChild(formIngreso);
}