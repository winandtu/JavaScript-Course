//Los prototypes, sirven para que los metodos o propiedades pertenezcan a un solo objeto y no a muchos es decir que sea exclusivo, además sirve para tener un mejor orden de código.

//En este ejemplo haremos que los prototipo sólo sean para el objeto jugador.

function Jugador (nombre, sueldo,numeroBalonO){
    this.nombre = nombre;
    this.sueldo = sueldo;
    this.numeroBalonO=numeroBalonO;
}

//creamos los prototipos que vendrian siendo los metodos y estos solo perteneceran a Jugador

Jugador.prototype.balonOro = function(){

    let nivel;
    if(this.numeroBalonO>3){
        nivel = 'leyenda';
    }else if(this.numeroBalonO>0){
        nivel = 'Elite';
    }else{
        nivel = 'normal';
    }

    return nivel;
}

//Metodo para nuevo contrato del jugador
Jugador.prototype.nuevoContrato = function(nuevoSueldo){
    return this.sueldo+=nuevoSueldo;
}

//imprime toda la información del jugador
Jugador.prototype.imprimirDatos = function(){
    return `Nombre: ${this.nombre}\n Sueldo: ${this.sueldo} \n Balones de oro: ${this.numeroBalonO} \n Nivel: ${this.balonOro()}`;
}

//Instancio y creo 3 jugadores usando todo de la clase jugador
const Mbappe= new Jugador('Mbappe', 150000, 0);
const Cr7 = new Jugador('C. Ronaldo', 200000,5);
const Ronaldinho = new Jugador('Ronaldinho', 50000,1);

//Contratos

Mbappe.nuevoContrato(30000);
Cr7.nuevoContrato(50000);

//Imprimir datos

console.log(Mbappe.imprimirDatos());
console.log(Cr7.imprimirDatos());
console.log(Ronaldinho.imprimirDatos());

//HERENCIA
//Vamos a heredar de jugador a jugadores que ganaron mundial

function JugadorMundial(nombre, sueldo,numeroBalonO,mundiales, pais){
    //Heredamos los atributos de jugador es decir el nombre, sueldo y balon de oro

    Jugador.call(this, nombre, sueldo,numeroBalonO);
    this.mundiales = mundiales;
    this.pais = pais;
}

//Para heredar su prototype

JugadorMundial.prototype = Object.create(Jugador.prototype);

//Instancio
const Zidane = new JugadorMundial('Zidane', 20000, 2, 1, 'Francia');

console.log(Zidane.imprimirDatos());
console.log(Zidane);
