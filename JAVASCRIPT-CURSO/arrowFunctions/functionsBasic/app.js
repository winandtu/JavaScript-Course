let aprendiendo;

aprendiendo = (num,num2)=> num+num2;

console.log(aprendiendo(6,5))

//retorna objeto, se agrega parentesis

const datos = ()=>({nombre: 'Danilo', edad: 22});

console.log(datos())

//usando callbacks y arrowfunctions

//callbacks

const productos = ['teclado','vaso','lapiz','Computador'];

let numLetras = productos.map(function(producto){
    return producto.length;
})

console.log(numLetras);

//usando arrowFunctions

numLetras = productos.map((producto) => producto.length);

console.log(`con callbacks es: ${numLetras}`);

//ejemplo con foreach imprime los productois

//agrega la posicion
productos.forEach((producto,index) => console.log(`${index}: ${producto}`));

//imprime los productos
productos.forEach((producto)=>console.log(producto));

