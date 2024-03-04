alert("Bienvenido a DC gimnasios")
let nombre = prompt("Ingrese su nombre por favor:")
let dias = Number(prompt("Hola " + nombre + ", ingresa cantidad de días (1-6 días) que asistiras al gimnasio:"));
    console.log(dias);
let precio = 10000
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
