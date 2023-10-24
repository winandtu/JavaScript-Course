const numeros= [1,2,3,4,5,6,7];

const dias = new Array('Lunes', 'Martes', 'Miercoles')

console.log(dias)

const mezclado= new Array('hola',1,'martes',45.55, true);

console.log(mezclado);

//Para comprobar si es un arreglo 

console.log(Array.isArray(mezclado)); 

//agregar elementos en el arreglos al final

dias.push('Jueves')
console.log(dias)

//agregar elementos en el arreglos al inicio
dias.unshift('inicioAgregado')
console.log(dias)

//Encontrar un elemento en el arreglo

console.log(dias.indexOf('Jueves'))

//Eliminar elemento final del arreglo

console.log(dias.pop())
console.log(dias)

//Eliminar elemento inicio del arreglo

console.log(dias.shift())
console.log(dias)

//Quitar un elemento x del arreglo sin importar su posición splice

console.log(dias.splice(2,1)) //El segundo argumento osea 1, es la candtidad de argumentos que quieres que se quite, en este caso es 1 elemento quitar desde posición 2
//Eliminar elemento final del arreglo
console.log(dias)

//Revertir
console.log(dias.reverse())

//Unir arreglos

console.log(dias.concat(mezclado))

//Ordenar arreglo video 024

const frutas =  Array('manzana','fresa','naranja','Platano','Banano');

frutas.sort();

console.log(frutas)

//Ordenar números

let numerOrdenar = [2,8,1,101,65,20,14]

//menor a mayor
numerOrdenar.sort(function(x,y){
    return x-y;
});

console.log(numerOrdenar);

//mayor a menor
numerOrdenar.sort(function(x,y){
    return y-x;
});

console.log(numerOrdenar);