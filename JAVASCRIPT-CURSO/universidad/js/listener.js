

//event listener click al buscador
/*
document.querySelector("#submit-buscador").addEventListener('click', function(e){
    e.preventDefault();
    alert('hola danilo')
})*/

//podemos hacer funciones por fuera de los eventos

document.querySelector('#submit-buscador').addEventListener('click',accionClick);

function accionClick(e){
    e.preventDefault();
    let elemento;
    elemento =e;
    //target es el atributo más importante de e:

    elemento = e.target.innerText= 2+2;
    console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click',cambiarEncabezado)

function cambiarEncabezado(e){
    e.preventDefault();
    let elemento2;
    elemento2 = e.target.innerText;
    elemento2 = e.target.innerText='Hola Dani';
    console.log(elemento2);
}

//USO DE VARIABLES Y DEL LISTENER
//vars

const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const botonCarritoVacio = document.querySelector('#vaciar-carrito');

//eventos:
//click
botonCarritoVacio.addEventListener('click', ejecEvento);

//doble click

//botonCarritoVacio.addEventListener('dblclick', ejecEvento);

//existen más eventos como: mouseenter, mouseleave, mouseover, mousemove...
function ejecEvento(e){
    console.log(`EVENTO ES: ${e.type}`);
}

//////////////////////
//Eventos de inputs

const busqueda = document.querySelector('#buscador');

//keypress: nos da las palabras que presionamos
//busqueda.addEventListener('keypress', ejecBuscar);

//keydown
busqueda.addEventListener('keydown',ejecBuscar);

//otros eventos: cut, copy, keyup, blur, focus, input: es todo los metodos...
function ejecBuscar(e){
    //Para colocar lo que escribimos en el encabezado en vez de la consola

    document.querySelector('#encabezado').innerText= busqueda.value;
    console.log(`Resultado del event ${e.type}: ${busqueda.value} `);
}

//saber la clase en la que se da click en la pagina.

document.body.addEventListener('click', encontrarClase);

function encontrarClase(e){

    e.preventDefault;

    console.log(e.target.classList);
    return e.target.classList;
}

//ahora probaremos a que elemento se le dio click y a cual no, haremos una filtración

function verificarEleme(e){
    if(encontrarClase(e).contains('borrar-curso')){
        console.log('si');
    }else{
        console.log('no');
    }
}