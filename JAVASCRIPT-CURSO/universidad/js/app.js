// Eliminar de Local Storage
//localStorage.clear();

//Scripting: Secuencia de elementos y comandos
let elemento;
elemento = document;
elemento= document.all; //Nos dara todos los datos del doc
console.log(elemento);

//En la pos 10 esta el head y vamos a sacarlo por consola

elemento = document.all[10];
console.log(elemento);

//Otra forma para retornar el body o head
elemento= document.body;

//Para que nos regrese el puerto en la que estamos
elemento= document.domain;
console.log(elemento);

//Para que nos regrese la URL en la que estamos
elemento= document.URL;
console.log(elemento);

//Para que nos regrese la URL en la que estamos
elemento= document.URL;
console.log(elemento);

//Para que nos regrese la UTF en la que estamos
elemento= document.characterSet;
console.log(elemento); //Nos regresa el utf

//Para que nos regrese todos los formularios en la que estamos
elemento= document.forms;
elemento= document.forms[0];//Acceder al primer formulario
elemento= document.forms[0].id; //Id que usa este formulario
console.log(elemento); //Nos regresa el único formulario que tenemos, en este caso solo tenemos uno de busqueda

//Clases
//Para acceder a una clase
elemento= document.forms[0].className; //Acceder a la clase del formulario

elemento= document.forms[0].classList; //Lista de las clases
elemento= document.forms[0].classList[0];//Acceder a la clase con pos 0
console.log(elemento)

//Para saber la cantidad de imagenes y la lista
elemento = document.images;
elemento = document.images[2]; //La imagen con pos 2
console.log(elemento);

//Para acceder en esa imagen:

elemento = document.images[2].src; //Accedo con una url
console.log(elemento);

elemento = document.images[2].getAttribute('src'); //Accedo a todos los atributos hasta personalizados
console.log(elemento);

//Para acceder a los Scripts
elemento = document.scripts;
console.log(elemento);

//EJEMPLO CON LAS IMAGENES: Transformar la colección de imagenes en una arreglo para poderlas manipular con las funciones de JS.

let imagenes;
imagenes = document.images;

//Convierto la colección en un array
let imagenesArray = Array.from(imagenes);
console.log(imagenesArray);

//MAP

let resultado= imagenesArray.map( function (imagen, indice){
    return `${indice}: ${imagen}`
})
console.log(resultado)

//Otra forma con ForEach:

imagenesArray.forEach(imagen => { console.log(imagen)
});

//Otra forma
console.log('Nuevo For')
for (let img of imagenesArray){
    console.log(img);
}