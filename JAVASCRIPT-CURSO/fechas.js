//FECHAS

const diaHoy = new Date();

console.log(diaHoy);

//Para colocar fecha: mes,dia, año:

let navidad2023 = new Date('12-25-2023');
console.log(navidad2023);

//Metodos de Date

let valor;

//mes
valor = new Date().getMonth();

//dia
valor = new Date().getDate();

//año
valor = new Date().getFullYear();

//milisegundos de año 1970
valor = diaHoy.getTime();

//cambiar valores de la fecha usando set:

valor = diaHoy.setFullYear(2022);
valor = diaHoy.getFullYear();
console.log(valor);

// IF ELSE ELSEIF

//Ejemplo para saber si los campos han sido llenados

let puntaje;

if(puntaje){ //si el puntaje no es undefined es lo mismo que: typeof puntaje != 'undefined'
    console.log(`El puntaje es de ${puntaje}`);
}else {
    console.log('No hay puntaje');
}

//Hora actual menor o igual a las 11:59 am, si es mayor es buenas tardes sino buenos dias.

let horaAc = new Date();
let hora, mañana, tarde;
//hora = horaAc.setHours(10);
hora=horaAc.getHours();
mañana = horaAc.setHours(11);
tarde = horaAc.setHours(12);
console.log(hora);

if (hora<=tarde){
    console.log('hora AM');
} else if(hora>=mañana){
    console.log('hora PM');
}else {
    console.log('No hay hora');
}

// and: &&, or: ||



//if else en una sola linea: TERNARIO

//Ejemplo de loguear

const logueado= true;

console.log(logueado ===true ? 'Si se logueo' : 'No logueado');

//PROXIMO VIDEO 36

//swtich:

//Ejemplo meses

let mesActual;

switch(new Date().getMonth()){

    case 0:
        mesActual = 'enero';
        break;
    case 1:
        mesActual = 'febrero';
        break;
    case 2:
        mesActual = 'Marzo';
        break;
    case 3:
        mesActual = 'Abril';
        break;
    default:
        mesActual = 'No esta el mes';
        
}

console.log(mesActual);