
//FUNCTION DECLARATION:
//Hare una función que salude al nombre que se le de, sin embargo, sino tiene nombre se le dara uno por default en este caso será visitante.


function saludar (nombre ='Visitante'){
    return `hola ${nombre}`;
}

let saludo = saludar('Danilo');
console.log(saludo);

//Por default:
saludo = saludar();
console.log(saludo);


//FUNCTION IIFE: se declaran y se invocan al mismo tiempo

(function (nombre){
    return console.log(`Hola me llamo ${nombre}`);
}) ('Danilo Arevalo Palacios');

//Metodos dentro de un objeto

const canciones = {

    reproducir : function (){
        return console.log('Reproducir canción');
    },

    pausar : function(){
        return console.log('Pausar canción');
    }
}

canciones.reproducir();

//También se pueden agregar nuevos metodos al objeto
//Se agrega este nuevo metodo de borrar
canciones.borrar = function(id){
    return console.log(`Borrar canción ${id}`);
}

canciones.borrar(17);

