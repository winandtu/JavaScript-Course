//ITERADORES PARA ARREGLOS, new.set() y new.map()

//Sintaxys:

/*for(let entrada of nombreArreglo.entries()/values()/key()){
        console.log(entrada);
    }*/


//entries: Regresa llave y valor
//values: Regresa solo el valor
//keys: Regresa las llaves
//default
//Ejemplos:

const pueblos = ['Cordoba','Puerres','Ipiales','Iles'];
const ordenes = new Set([174,442,123,012]);
let datos = new Map(); 
datos.set('Nombre','Danilo');
datos.set('codigo','1926167');

//entries: Regresa llave y valor

for(let pueblo of pueblos.entries()){
    console.log(pueblo);
}

//values: Regresa solo el valor

for(let valor of ordenes.values()){
    console.log(valor);
}

//keys: Regresa las llaves

for(let llave of datos.keys()){
    console.log(llave);
}



//For para Strings 
//Forma vieja, haciendo que una palabra al reves
let palabra = 'Hola Danilo';
let nuevaPalabra=[];

for (let i=palabra.length; i>=0; i--){
    console.log(palabra[i]);
    nuevaPalabra.push(palabra[i])
}
console.log(nuevaPalabra);

//Forma nueva

for (let letra of palabra){
    console.log(letra);
}

//Sacar enlaces del html

const enlaces = document.getElementsByTagName('a');

for(let enlace of enlaces){
    console.log(`\n${enlace.href}`);
}

//WINDOWS, COSAS DE LA VENTANA

//Para saber la ubicación

let ubicacion;
//ubicacion
ubicacion = window.location;

//Saber lo que se busca en la url, query string, esto es el get
ubicacion = window.location.search;

//puerto
ubicacion = window.location.port;

//reedireccionar en algun link
//ubicacion = window.location.href='http://instagram.com';
console.log(ubicacion)

//Saber alto y ancho del navegador

let altura, anchura;

altura = window.outerHeight;
anchura = window.outerWidth;
//Saber alto y ancho del ventana
altura = window.innerHeight;
anchura = window.innerWidth;

console.log(`alto: ${altura} ancho: ${anchura}`);

//navigator

let navegador= window.navigator;

//lenguaje
navegador= window.navigator.language;
console.log(navegador);