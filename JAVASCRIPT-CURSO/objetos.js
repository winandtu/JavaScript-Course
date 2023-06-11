//Objetos

const persona = {
    nombre:'Danilo',
    apellido: 'Arevalo',
    profesion: 'Ingeniero',
    edad: 23,
    musica: ['Salsa','Bachata','Hip hop'],
    hogar: { //Se pueden agregar objetos dentro de otros objetos
        ciudad: 'Cali',
        pais: 'Colombia'
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
};

console.log(persona)
console.log(persona.profesion)
console.log(persona.musica)

//Añadir o modificar en un objeto
persona.musica.push('Rock');
console.log(persona.musica)
console.log(persona.hogar);
console.log(persona.nacimiento());

//Arreglo de objetos

let jugadores = [{nombre: 'Falcao', edad:37, salario: 1000000}, {nombre: 'CR7', edad: 38, salario: 10000000}, {nombre: 'Luis Diaz', edad: 26, salario: 2000000}]

//Recorrer el arreglo de objetos:

for (let i =0; i< jugadores.length; i++){

    //console.log(jugadores[i]);
    console.log(`nombre ${i+1}: ${jugadores[i].nombre}, de edad: ${jugadores[i].edad} con un salario de: ${jugadores[i].salario} `);
};

//Cambiar datos de los objetos:

//de manera individual si es const o let

jugadores[0].salario = 1500000;
console.log(jugadores);

//Reescribir el objeto si es let:

jugadores = {
    nombre: 'Messi',
    edad: 36,
    salario: 50000000
};

console.log(jugadores)

//TRY CATCH: sirve para saltar errores y probar funciones que pueda que paren la ejecución.
//Se usa por ejemplo para descargar un listado de clientes

//la función algo no tiene nada por eso ejecutara error y detendra el programa, pero, con el try catch saltara ese error y ejecutara el programa


try{
    algo();
}catch(error){
    console.log('La función ha saltado');
}finally{
    console.log('ejecuta de todos modos a pesar de que este o no este el error'); //
}

function obtenerClientes(){
    console.log('Descargando...');

    setTimeout(function (){
        console.log('Completo');
    }, 3000);
}

obtenerClientes();