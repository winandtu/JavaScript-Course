//cargar datos con fetch y usando arrowFunctions

//carga de txt

document.getElementById('txtBtn').addEventListener('click', cargarTxtArr);

document.getElementById('jsonBtn').addEventListener('click',cargarJsonArr)

//formal normal
/*
function cargarTxtArr(){
    fetch('datos.txt') //busca
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        let html='';
        const nombreSeparado= data.split(' '); //separo los nombres del txt con espacio
        const resultado= document.getElementById('resultado');

        nombreSeparado.forEach(function(nombre){
            html+=`<p>Nombre: ${nombre}</p>`
            resultado.innerHTML=html;
        })
        
    })
}

* */

//aplicando arrowFunctions:

function cargarTxtArr(){
    fetch('datos.txt') //busca
    .then((res)=>res.text()
    )
    .then((data)=>{
        let html='';
        const nombreSeparado= data.split(' '); //separo los nombres del txt con espacio
        const resultado= document.getElementById('resultado');

        nombreSeparado.forEach((nombre,index)=>{
            html+=`<p>${index+1} - Nombre: ${nombre}</p>`
            resultado.innerHTML=html;
        })
        
    })
}

//cargar JSON

function cargarJsonArr(){
    fetch('empleados.json') //bucar
    .then(res=> res.json()) //cargar
    .then(data =>{ //mostrar
        
        let html ='';
        const resultado = document.getElementById('resultado');
        data.forEach(data=>{
            
            html+=`<p> <li>Nombre: ${data.nombre} - Puesto: ${data.puesto}</li> </p>`

            resultado.innerHTML=html;
        })
    })
}