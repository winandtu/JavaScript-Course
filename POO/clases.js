//clases

class Cliente{

    constructor (nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    };

    //metodos

    imprimirSaldo(){
        return `Nombre: ${this.nombre}\n Saldo: ${this.saldo}`
    };

    static bienvenida(){
        return 'Bienvenidos al cajero de cliente'
    }
}
//instancio cliente

const cliente1= new Cliente('Dani', 150000);
console.log(Cliente.bienvenida());
console.log(cliente1.imprimirSaldo());


//heredar y nueva clase empresa:

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, ubicacion){
        super(nombre,saldo); //hereda los atributos de nombre y saldo de la clase Cliente
        this.telefono = telefono;
        this.ubicacion = ubicacion;

    }
    
    //Para reescribir una propiedad heredada

    static bienvenida(){
        return 'Bienvenidos al cajero de la empresa'
    }
}

const empresa1 = new Empresa('Udemy',500000,312456987,'Colombia');

console.log(Empresa.bienvenida());
console.log(empresa1.imprimirSaldo());