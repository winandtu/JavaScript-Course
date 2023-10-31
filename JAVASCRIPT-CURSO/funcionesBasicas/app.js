//document.getElementById('app').innerHTML='Hola mundo';

//prompt: es igual a un JOPtionPane en el navegador

//Se va a pedir nombre y edad como entradas y se va a imprimir en el html
/*
let nombre = prompt("Ingresa tu nombre: ")
let edad = prompt("Ingresa tu edad: ")

document.getElementById('app').innerHTML= `Se llama ${nombre} y tiene ${edad} años`;
*/

//------------Variables --------
//var: Hay que definir cada vez la variable. 
//let: Inicia con un valor pero en el futuro se puede cambiar (se va a reescribir)
//const: Si se inicializa un valor no se puede cambiar en un futuro

//var nombre = 'Danilo';

//console.log(nombre)

let mensaje;
mensaje= 'Hola Danilo, espero que tengas un buen comienzo';

//Busca la posición de la palabra que se quiera encontrar

console.log(mensaje.indexOf('comienzo'));

//Extrae el mensaje de la pos inicial que se le coloque hasta una posición final también colocada

console.log(mensaje.substring(0,18))

//Extrae inversamente
console.log(mensaje.slice(-4))
console.log(mensaje.slice(0,4))

//separa las cadenas con lo que encuentre y se le coloque
//Separa con espacio en blanco
console.log(mensaje.split(' '))

//Separa la palabra cuando encuentra una coma
console.log(mensaje.split(','))

//Reemplaza la palabra
console.log(mensaje.replace('comienzo','final'))

//Te confirmara si la palabra se encuentra en el mensaje(true/false)
console.log(mensaje.includes('Danilo'));

//Repite valores
let repetirPalabra='Continua tu camino'+' ';

console.log(repetirPalabra.repeat(4))//4 veces repite

//NUMEROS

const numero1= 30,
 numero2= 20,
 numero3= 23.5,
 numero4= 2,
 numero5= .19,
 numero6= -12;

 let resultado;
let absoluto= -20;
console.log(`Valor absoluto es: ${Math.abs(absoluto)}`);
 resultado= numero1%numero2;

 console.log('Modulo: ',resultado)

 //Redondeos:
resultado2= Math.round(2.4)
resultado2= Math.ceil(2.4) //redondea en techo
resultado2= Math.floor(2.4) //redondea en piso
 console.log(resultado2)

 //Minimo y máximo y aleatorio

 resultado3= Math.min(3,6,5,9,8,10);
 resultado3= Math.max(3,6,5,9,8,12);
 resultado3= Math.random();
 console.log(resultado3)

 //TIPOS DE VARIABLES IMPORTANTES PARA CONOCER

 let valor;
 //nulo
 valor= null;
 //indefinido
 valor= undefined;
//objeto

valor= {
    nombre: 'Danilo Arevalo',
    profesion: 'Ingeniero'
};

console.log(valor);

//para saber el tipo de dato

console.log(`El tipo de dato de valor: ${valor} es: ${typeof valor}`);

//simbolos

valor = Symbol('EsSimbolo');
console.log(valor)

///////comparaciones
//Tres iguales son para comparar los valores y el tipo de dato, con dos solo compara el valor
console.log(20==='20')

//Comparar cadenas de texto
//ABCFG...(Menor rango)
//abcdf...(Mayor rango)
console.log('a'>'A')

//CONVERTIR CADENAS DE TEXTO A NUMEROS

const num1='17',
num2 = 24,
num3='dos';

//Convertimos num1 a numero
let conversion = Number(num1);
conversion = parseInt(num1)
console.log(`${conversion} se ha converito en tipo  ${typeof conversion}`)

//toFixed: Para cortar el número en la parte entera o con n decimales

dato= 121344.5445468
console.log(`uso del toFixed, es con 4 decimales: ${dato.toFixed(4)}`)
console.log(`uso del toFixed, es sin decimales: ${dato.toFixed()}`)

//Combinación de convertir en float y cortar con 2 decimales

console.log(parseFloat(dato).toFixed(2));

//CONVERTIR NÚMERO A STRING

let codigo;
codigo=546521;
//conversión a string

codigo= String(codigo);

console.log(`La conversión de numero a string y longitud de codigo es: ${codigo.length}`)

//Otra forma usando toString

console.log(codigo.toString())