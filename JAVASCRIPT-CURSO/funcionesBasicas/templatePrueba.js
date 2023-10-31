//template para datos Danilo Arévalo

const nombre = prompt('Cual es tu nombre?: ');
const apellido = prompt('Apellido: ');
const profesion = prompt('Profesion: ')
const añoNacimiento = prompt('Que año naciste?: ')

let datos = {

    nomb : function(nombre){
        return nombre
    },

    apell: function(apellido){
        return apellido
    },

    prof: function(profesion){
        return profesion
    }
};

//se agrega un nuevo Metodo
datos.nacimiento = function (){
    return new Date().getFullYear() - añoNacimiento;
}

html = `<h2>Datos Personales</h2>
        <ul>
            <li> Nombre: ${datos.nomb(nombre)}</li>
            <li> Apellido: ${datos.apell(apellido)}</li>
            <li> Profesion: ${datos.prof(profesion)}</li>
            <li> Edad: ${datos.nacimiento(añoNacimiento)}</li>
        </ul>
`

document.getElementById('app').innerHTML= html;

