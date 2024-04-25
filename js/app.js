let nombre = document.querySelector('#name');
let ciudad = document.querySelector('#city');
let dias = document.querySelector('#day');
let precio = 10000;
let URL = "./js/sucursales.json";
let boton = document.querySelector('#enviar');
let formLocal = document.querySelector('.segunda-parte');
boton.addEventListener('click', mostrarInfo);

function quitarForm(){
    let quitar = document.querySelector('.container');
    quitar.remove();
}
function quitarInicio(){
    let sacar = document.querySelector('#presentacion');
    sacar.remove();
}

function sucursal(locales) {
    formLocal.innerHTML = "";
    locales.forEach(local =>{
        const sitio = document.createElement('div');
        sitio.classList.add('listaLocal');
        sitio.innerHTML= `
            <ul class="lista-detalles">
                <li>${local.localidad}</li>
                <li>${local.domicilio}</li>
                <li>${local.telefono}</li>
            </ul>`;
        formLocal.append(sitio);
    });
}


function frase(){
    if (dias.value <=  '7' && dias.value > '4'){
        Swal.fire({
            title: `Hola ${nombre.value}`,
            text: `Tu mensualidad es de $${precio*1.25}`,
            imageUrl: "../assets/images/foto-DClogo.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
    }else if (dias.value <= '4' && dias.value >'2'){
        Swal.fire({
            title: `Hola ${nombre.value}`,
            text: `Tu mensualidad es de $${precio*1.25}`,
            imageUrl: "../assets/images/foto-DClogo.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
    }else if (dias.value <= '2' && dias.value >= '1'){
        Swal.fire({
            title: `Hola ${nombre.value}`,
            text: `Tu mensualidad es de $${precio}`,
            imageUrl: "../assets/images/foto-DClogo.png",
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: "Custom image"
        });
    }else {
        Swal.fire({
            icon: "error",
            title: `Hola ${nombre.value}`,
            text: `La cantidad de dias sugerido no es válido.`,
        });
    }   
}


function mostrarInfo(e){
    e.preventDefault();
    quitarForm();
    quitarInicio();
    frase();
    fetch(URL)
        .then((response)=>response.json())
        .then((data)=> sucursal(data))
    
}