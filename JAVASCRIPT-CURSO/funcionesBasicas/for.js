//for

//Ejemplo de imagenes y que la imagen 4 sea mas grande

//Vamos a tener 10 imagenes

for(let i=1; i<11; i++){

    if(i==4){
        console.log(`La imagen ${i} se esta expandiendo `);
        continue; //sirve para que imprima esto en la pos 4 y continue normal, si quiero terminar doy break.
    }

    console.log(`imagen ${i} normal`);
}

//video 39

//For each: Arreglo con este for

const pendientes = ['Aprender','JavaScript','Este año','gg'];

pendientes.forEach(function(pendiente, index) {
    console.log(`${index}: ${pendiente}`)
});

//Map para recorrer un arreglo

const carritoCompras = [{id:1, Producto:'sopas'}, 
                        {id:2, Producto:'leche'}, 
                        {id:3, Producto:'pan'}, 
                        {id:4, Producto:'platanos'}, 
                        {id:5, Producto:'arroz'}];

                        //MAP
const nombreProducto = carritoCompras.map(function(carritoCompras){
    return carritoCompras.Producto;
});

console.log(nombreProducto);

//Conseguir nombres reales de los Vengadores
//solo queremos recuperar sus nombres reales en el nuevo arreglo.
let vengadores = [
    {nombre: "steve rogers", nombreHeroe: "captain america"},
    {nombre: "tony stark", nombreHeroe: "iron man"},
    {nombre: "bruce banner", nombreHeroe: "the hulk"},
    {nombre: "peter parker", nombreHeroe: "spiderman"},
    {nombre: "tchalla", nombreHeroe: "black panther"}
]


let nombreVengador = vengadores.map(vengador=> vengador.nombre)

console.log(nombreVengador)

//Conseguir los nombres de los héroes de los Vengadores

let nombreDeHeroe = vengadores.map(function (heroe, indice){
    return `${indice}: ${heroe.nombreHeroe}`
})

console.log(nombreDeHeroe);

/* el método map() toma el valor sobre el que se itera y también su posición de indice. Hay otro argumento que añadir a esos dos, los argumentos del arreglo.

El argumento arr representa el arreglo de destino sobre el que se hace un bucle, junto con todo su contenido. Con este argumento, se puede buscar en el arreglo completo para encontrar algo.

En este ejemplo, accederemos al parámetro arr para buscar y comprobar si el elemento actual es el último de la lista. Si no lo es, accedemos al siguiente elemento y lo restamos del elemento actual. Si es el último, simplemente lo devolvemos.*/

const arregloViejo = [33, 20, 10, 5];

let arregloNuevo = arregloViejo.map(function(valorActual, indice, arr){
    let siguienteItem = indice+1 < arr.length ? arr[indice+1]: 0
    return valorActual-siguienteItem
})

console.log(arregloNuevo);

//Imprimir un objeto con un for

const Radamel = {
    Nombre: 'Falcao',
    Edad: 37,
    Equipo : 'Rayo Vallecano',
    Hijos : 5
};

//imprimir objeto
for(let datoFalca in Radamel){
    console.log(`${datoFalca}: ${Radamel[datoFalca]}`);
}