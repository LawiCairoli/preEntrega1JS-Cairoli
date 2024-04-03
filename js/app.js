// Solicitud de dias con el nombre en frase
 // definimos el nombre del usuario
let consultas = document.getElementById('consulta');
consultas.addEventListener('click', dias);


function quitarNombre(){
    let bienvenida = document.querySelector('#primeraParte')
    bienvenida.remove();
}

function dias(){
    const nombre = document.getElementById('name').value;
    let dia = document.createElement('div')
    dia.setAttribute("id", "segundaParte")
    dia.innerHTML = nombre + ", "+ '<label for="dias">ingrese la cantidad de dias que asistirá </label> <input type="text" id="dias"> <button type="button" id= "dia" >Aceptar</button>'
    document.body.appendChild(dia)

    quitarNombre()
}

// solicitud de ciudad y respuesta
const cantidadDias = document.querySelector('#dia');
cantidadDias.addEventListener('click', ciudad);

function quitarDias(){
    let segundaConsulta = document.querySelector('#segundaParte')
    segundaConsulta.remove();
}

function ciudad(){
    let lugar = document.createElement('div')
    lugar.setAttribute("id", "terceraParte")
    lugar.innerHTML = '<label for="city">Ingrese la ciudad </label> <input type="text" id="city"> <button type="button" id="cita" >Aceptar</button>'

    
    document.appendChild(lugar)
     quitarDias()
}

const gimnasio = document.querySelector('#cita')
gimnasio.addEventListener('click', precios)

function quitarCiudad(){
    let segundaConsulta = document.querySelector('#segundaParte')
    segundaConsulta.remove();
}

let precio = 10000; // Declaración de precio mensual mínimo
let dias1 = document.getElementById('cita').value; 

//Funcion para aportar el precio teniendo en cuenta la cantidad de dias
function precios(){
    if(dias1 >= 7){
        alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
    }else if((dias1 <= 6) && (dias1 > 4)){
        let mensualidad = precio * 1.5;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias1 <= 4)&&(dias1 >2)){
        let mensualidad = precio * 1.25;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias1 <= 2)&&(dias1 >=1)){
        alert(nombre + ", tu mensualidad será de $" + precio );
}else{
    alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
}
quitarCiudad()
}
precios();

// // funciones vinculadas a la busqueda de sucursales

function mostrarSucursales(sucursales){
    sucursales.forEach(sucursal => {
        alert(nombre + ', nuestro gimnasio mas cercano en ' + sucursal.localidad + ' esta en ' + sucursal.domicilio + ' y el telefono es ' + sucursal.telefono)
    });
}

function filtrarLocalidad(sucursal){
    let ciudad = document.getElementById('city').value;
    if(ciudad){
        return sucursal.localidad === ciudad
    }
    return sucursal;
}

function filtrarSucursal(){
    const resultado = sucursales.filter(filtrarLocalidad);
    if(resultado.length>0){
        mostrarSucursales(resultado)
    }else{
        let error = document.createElement('h3')
        error.innerHTML = 'El dato de ciudad ingresado no es correcto'
        setTimeout(() => {
            error.remove()
        }, 3000);
    }
}

filtrarSucursal();
filtrarLocalidad(ciudad);

// funcion logueo

