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

    //Hacer el listener de borrar
    ListaTweets.addEventListener('click', ejecBorrar);

    //cargar contenido del LocalStorage al DOM:

    document.addEventListener('DOMContentLoaded', cargarContenido);
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

    //agregar tweet al Local Storage

    TweetLocalStorage(tweet);

}

function TweetLocalStorage(tweet){

    //obtengo todos los tweets
    let tweets = obtenerTweetLocalStorage();
    
    //agregar nuevo tweet al arreglo
    tweets.push(tweet);

    //Agregar al localStorage
    //JSON.stringify // convierte el Json en string
    localStorage.setItem('tweetsKey',JSON.stringify(tweets));

    //localStorage.setItem('tweetsKey', tweet);
}


//nos dara el arreglo de los tweets [tweet1, tweet2...]
function obtenerTweetLocalStorage(){
    let tweets;

    if(localStorage.getItem('tweetsKey')===null){
        tweets=[];
    }else{
        tweets=JSON.parse(localStorage.getItem('tweetsKey'));

    }
    return tweets;
}

//cargar el contenido de local storage al dom:

function cargarContenido(){
    let tweets;
    tweets= obtenerTweetLocalStorage();

    tweets.forEach(function(tweet){

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

    })
   // console.log(tweets);
}

function ejecBorrar(e){
    e.preventDefault;
    
    if(e.target.className==='borrar-tweet'){
        //parentElement: Accede al atributo de la clase en este caso es li, si quieres ir más arriba(salir de li), agregas otro parenElement

        e.target.parentElement.remove();
        alert('tweet eliminado')
        tweetFiltrado = e.target.parentElement.innerText; //dara el elemento a borrar del localStore

        borrarTweet(tweetFiltrado);//llamara la función y borrara el tweet
        
        
    }else {
        console.log('Estas seleccionando otra cosa')
    }
    
}

//función para borrar tweet:

function borrarTweet(tweet){

    let tweets, tweetNuevo;

    tweetNuevo = tweet.substring(0, tweet.length-1); //nos dara el tweet sin la X, dado que por ahora nos da el tweet de esta manera ejem: holaX, siendo x el icono.

    tweets = obtenerTweetLocalStorage();//Obtengo todos los tweets de localStorage

    //recorro los tweets y borro el tweet seleccionado

    tweets.forEach(function (tweet, index){
        if(tweet===tweetNuevo){
            
            //saco el tweet que se selecciona

            tweets.splice(index,1); //de la lista de tweets selecciono el tweet seleccionado
        }
    });

    //actualizo localStorage
    localStorage.setItem('tweetsKey', JSON.stringify(tweets));


    console.log('nuevo: ',tweetNuevo)
}