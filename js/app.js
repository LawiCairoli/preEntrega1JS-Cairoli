alert("Bienvenido a DC gimnasios");
let nombre = prompt("Ingrese su nombre por favor:");
let ciudad = prompt("Ingrese la ciudad donde quiere asistir a nuestros gimnasios");
let dias = Number(prompt("Hola " + nombre + ", ingresa cantidad de días (1-6 días) que asistiras al gimnasio:"));
let precio = 10000;

function precios(){
    if(dias >= 7){
        alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
    }else if((dias <= 6) && (dias > 4)){
        let mensualidad = precio * 1.5;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias <= 4)&&(dias >2)){
        let mensualidad = precio * 1.25;
        alert(nombre + ", tu mensualidad será de $" + mensualidad );
    }else if((dias >= 2)&&(dias >=1)){
        alert(nombre + ", tu mensualidad será de $" + precio );
}else{
    alert(nombre + " la cantidad de días ingresado es erroneo, por favor ingresá un número entre 1 y 6. Muchas gracias");
}
}
precios();

while(ciudad != "ESC"){
    switch(ciudad){
        case "La Plata":
            alert(nombre + ", nuestro gimnasio mas cerca esta en calle 50 n°1326");
            break;
        case "Quilmes":
            alert(nombre + ", nuestro gimnasio mas cerca esta en Av. H. Yrigoyen n°526");
            break;
        case "CABA":
            alert(nombre + ", nuestros gimnasio en CABA son: Belgrano (Cramer n°1953), Recoleta (Laprida n°2147), Caballito (Formosa n°259)");
            break;
        default:
            alert(nombre + ", aun no tenemos sucursales cerca de tu casa.");
            break;
    }
    alert("Gracias por confiar en DC gimnasios");
}