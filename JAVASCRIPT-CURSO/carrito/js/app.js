//curso de carrito y localStorage

//variables

const carrito = document.getElementById('carrito');

const cursos = document.getElementById('lista-cursos')

const listaCursos= document.querySelector('#lista-carrito tbody'); //nos servira para que en el tbody se añada un nuevo html de insertarCarrito

const vaciarCarrito = document.getElementById('vaciar-carrito');

//listeners
cargarEventListeners();
function cargarEventListeners(){

    cursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', borrarCurso);

    vaciarCarrito.addEventListener('click', vaciarCarro);


}

//funciones

function agregarCurso(e){

    e.preventDefault();
    
    //console.log(e.target.classList);//consulta las clases que tiene

    //ingreso a la clase correspondiente
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement; //accede a toda la plantilla de agregar curso es decir a la clase padre

        //enviamos el curso seleccionado para leerlo
        leerDatosCurso(curso);
    }
    
}

//lee los datos del curso
function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent, //aqui selecciono dos atributos una que es la clase precio que contiene el precio y la otra es una etiquesta span, que contiene el descuento.

        id: curso.querySelector('a').getAttribute('data-id')
    };
    console.log(infoCurso);

    insertarCarrito(infoCurso); //pasa la info a un html
}

function insertarCarrito(curso){

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>
        <img src = "${curso.imagen}" width=100>
    </td>

    <td>
         ${curso.titulo}
    </td>

    <td>
         ${curso.precio}
    </td>

    <td>
        <a href="#" class= "borrar-curso" data-id= "${curso.id}"> X</a> 
    </td>
    `

    listaCursos.appendChild(row);
}

function borrarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){
        
        const elementoBorrar = e.target.parentElement.parentElement.remove(); //con un solo parentElement obtengo solo el botón, con dos parentElement obtengo toda la info de la tabla
        elementoBorrar; //llamo a elemento borrar
        //console.log(elementoBorrar);
    }
}

function vaciarCarro(e){

    e.preventDefault();

    //forma lenta:
    //listaCursos.innerHTML='';

    //forma recomendada y más rapida:

    //esto toma el primer elemento y remueve sucesivamente, es decir primero va con el elemento 1, luego el 2 pasa ser el 1 asi que lo elimina y asi sucesivamente.
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }

    return false; //para que no se cierre la pestaña al vaciar el carrito
}