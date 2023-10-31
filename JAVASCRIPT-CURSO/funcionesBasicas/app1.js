//Construcción de template

//Template literal

//Datos personales de Danilo y sueldo esperado

const nombre= 'Danilo Arévalo', profesion='Ingeniero', sueldoMonitor=300000, fondo=2000000;



function totalSueldo(sueldoMonitor, fondo){
    let total= sueldoMonitor+fondo;
    return total;
}

//Template literal

html= `<h3> Template literal </h3>
        <ul>
            <li> Nombre: ${nombre} </li>
            <li> Profesion: ${profesion} </li>
            <li> Sueldo como Monitor: ${sueldoMonitor}</li>
            <li> Fondo Alvaro Ulcue: ${fondo}</li>
            <li> Total de ganancias: ${totalSueldo(sueldoMonitor, fondo)}</li>

        </ul>
`


document.getElementById('app').innerHTML= html;