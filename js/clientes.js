class Cliente{
    constructor(nombres, apellido, edad, telefono, DNI, password){
        this.nombres = nombres;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
        this.password = password;
    }
    
}
const cliente = new Cliente("Pedro Enrique", "Marsiola", 39, 35896557, "PEm39_ola");
console.log("Gracias por registrarte " + cliente.nombres +' '+ cliente.apellido)