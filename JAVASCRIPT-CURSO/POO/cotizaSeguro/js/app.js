/*
- Existen 3 modelos,cada uno con precios distintos
- Cada año del auto su precio deberá ser menor en un 3%
- El seguro del auto completo o básico tienen distintos precios
- Debe ser hecho con prototypes luego migrarlo con clases
*/ 

//Vamos agregarle los años de los modelos de los carros

//máximo año
const max = new Date().getFullYear(); //año actual
const min = max -20; //carro hace 20 años

//console.log(max);
//console.log(min);

//agregamos los años al dom
const Selectanio = document.getElementById('anio');
for(let i=max; i>=min; i-- ){
    //console.log(i)
    const option = document.createElement('option'); //creamos un nuevo elemento para añadirlo a la interfaz de año del Dom.
    option.value = i; //Nos da los años que tiene
    option.innerHTML=i; //Agregamos los años
    
    Selectanio.appendChild(option); //Agregamos al campo de años del Dom.
}
////////////////////////////////////////////
//ahora realizamos el constructor

function Seguro(marca,anio, tipo){
    this.marca= marca;
    this.anio = anio;
    this.tipo = tipo;
}

//Hacemos los prototypes de seguro
//Cotizar y cáculos del auto:

Seguro.prototype.cotizarSeguro = function(){

    /* 1 = americano, 1.15
    2= asiatcio , 1.05
    3= europeo, 1.35 */
    //variables
    const base = 2000; //base del carro
    let precio;
    const marca = this.marca;
    const anio = this.anio;
    const tipo = this.tipo;

    //calculo el precio por la marca
    switch(marca){
        case '1':
            precio = base*1.15;
            break;
        case '2': 
            precio = base*1.05;
            break;

        case '3': 
            precio = base*1.35;
            break;
    }

    //calculo por el año

    const anioActual = new Date().getFullYear();
    //console.log(anioActual); //fecha actual

    const numeroAnios = anioActual-anio; //entre más años tenga el coche se le restara un 3%

    //console.log(numeroAnios);

    const porcentaje = 0.03;

    const calculo = numeroAnios*porcentaje*precio; //Este es el calculo de reducción por los años de uso del coche

    precio-=calculo;

    //calculo por el tipo 
    /*
    
    Basico = 30% más
    Completo =  50% más */

    if(tipo==='basico'){
        precio+=(precio*0.3);
    }else{
        precio +=(precio*0.5);
    }

    return precio;
}

//Interfaz
function Interfaz (){};

//Imprime los resultados

Interfaz.prototype.mostrarResultado=function (seguro, cotizacion){

    const resultado = document.getElementById('resultado');
    console.log(seguro.marca);
    console.log(cotizacion)

    //Mostrar el nombre de la marca y no solo su id:
    let nombreMarca;
    switch(seguro.marca){
        case '1': nombreMarca= 'Americano'
        break;

        case '2': nombreMarca= 'Asiatico'
        break;

        case '3': nombreMarca= 'Europeo'
        break;

    }

    console.log(nombreMarca);

    //creo div para mostrar la info en el DOM

    const div = document.createElement('div');

    div.innerHTML= `
    <p class = 'header'>Tu resumen</p>
    <p>Marca: ${nombreMarca}</p>
    <p>Año: ${seguro.anio}</p>
    <p>Tipo de seguro: ${seguro.tipo}</p>
    <p>Cotización: ${cotizacion}</p>
    `
    //mostrar img de un spiner cargando y a los 3 segundos se de el resultado
    const spinner= document.querySelector('#cargando img');
    spinner.style.display='block';

    setTimeout(function(){
        spinner.style.display='none';
        resultado.appendChild(div);
    }, 3000);
    

};

///////////////////////////////////////////
//Hacemos el eventlistener que dara todas las acciones del formulario
//variables

const formulario = document.getElementById('cotizar-seguro');

//disparar eventlistener
accionEventListener();

function accionEventListener(){
    formulario.addEventListener('submit', accionFormulario)
}

function accionFormulario(e){

    e.preventDefault();

    //instancio interfaz

    const interfaz = new Interfaz();
    //invoco las funciones
    const mark= selectMarca();
    const year = selectAnio()
    const type =selectTipo();

    //verifico que los campos se llenen
    if(mark ===''|| year===''|| type===''){
        //console.log('Faltan campos por llenar');
        alert('Faltan campos por llenar');

    }else{

        //Limpiar resultados de la interfaz:

        const resultados = document.querySelector('#resultado div');

        if(resultados!=null){
            resultados.remove();
        }
        //Instancio seguro
        const seguro = new Seguro(mark, year, type)
        const cotizacion = seguro.cotizarSeguro();

        //Mostrar resultado en interfaz

        interfaz.mostrarResultado(seguro, cotizacion);

    }
}

//Sacar marca del select para luego leerla
function selectMarca(){
    //leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    return marcaSeleccionada;
}

//Sacar el año del select y leerlo
function selectAnio(){
    const anios = document.getElementById('anio');

    const anioSelect = anios.options[anios.selectedIndex].value;

    return anioSelect;
}

//sacar el tipo de seguro

function selectTipo(){
    //Saco el tipo haciendo un query del tipo
    const seguro = document.querySelector('input[name = "tipo"]:checked').value;

    return seguro;
}
