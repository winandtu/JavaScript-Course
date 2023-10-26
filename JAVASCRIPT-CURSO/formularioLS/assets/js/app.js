//Almacenamiento local en el navegador

/*El usuario podra crear/eliminar/ ver sus tweet en un listado
Los tweets se almacenaran en localstorage
El usr podrà agregar una cantidad ilimitada de tweets
Al cargar la pagina los tweets deben cargarse de Local Storage, al eliminarse deben quitar de LStorage*/

//dara la lista de tweets:

const ListaTweets = document.getElementById('lista-tweets');

//Event Listeners

eventListeners();

function eventListeners(){
    document.querySelector('#formulario').addEventListener('submit',accionesTweet);
}

//funciones


function accionesTweet(e){
    
    //AGREGAR TWEET A LA LISTA:

    e.preventDefault;
    const tweet = document.querySelector('#tweet').value 
    //creamos la etiqueta para mostrar el texto en la page
    const li= document.createElement('li');
    li.innerText = tweet;
    //Agregamos la lista a la clase de lista tweets
    ListaTweets.appendChild(li);
    console.log(tweet);
    ///////////////////////
    //BORRAR TWEET DE LA LISTA

    //crea el boton borrar
    const botonBorrar = document.createElement('a');
    //creo la clase para el boton
    botonBorrar.classList= 'borrar-tweet';
    //Creo el icono del boton en este caso solo serà X
    botonBorrar.innerText='X';
    //agrego el boton al lado del tweet que se cree

    li.appendChild(botonBorrar);

}