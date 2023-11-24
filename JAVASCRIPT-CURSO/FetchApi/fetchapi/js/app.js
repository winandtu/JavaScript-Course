document.getElementById('txtBtn').addEventListener('click', cargarTxt);

document.getElementById('jsonBtn').addEventListener('click', cargarJson);

document.getElementById('apiBTN').addEventListener('click', cargarRestApi)

//funciones

function cargarTxt(){
    fetch('datos.txt') //aqui busca en la url
    //CONEXIÓN
        .then(function(res){ //aqui extrae el contenido de la url en res
            //console.log(res.text()); dice en que formato lo quiere, en este caso en txt 
            return res.text();
        })
        //EXTRAE LOS DATOS
        .then(function(datos){
            console.log(datos); //imprime los datos del txt
            const resultado = document.getElementById('resultado')

            resultado.innerHTML=datos;
        })
        //en caso de que se cargue mal o hay error
        .catch(function(error){
            console.log(error);
        });
}

function cargarJson(){
    fetch('empleados.json') //busca
        .then(function(res){//extrae
            return res.json();
        })
        .then(function(data){//muestra los datos
            //console.log(data);
            let html='';
            const resultado= document.getElementById('resultado');
            data.forEach(element => {
                console.log(element)
                html+= `<li>Nombre: ${element.nombre} -   Puesto: ${element.puesto}</li> `
                resultado.innerHTML=html;
            });
        })
        .catch(function(error){
            console.log(error);
        });
}

//consumiendo API de https://picsum.photos/list:

function cargarRestApi(){

    fetch('https://picsum.photos/list') //busca
        .then(function(res){ //extrae respuesta
            return res.json();
        })
        .then(function(data){//muestra la respuesta
            let html=''
            const resultado = document.getElementById('resultado');
            data.forEach(function(element){
                console.log(element)
                html += `<li><a target=_blank href="${element.post_url}" >Ver img</a> - Author: ${element.author}</li>`

                resultado.innerHTML= html;
            })
        })
}