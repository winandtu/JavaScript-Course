//los await bloquean el proceso anterior hasta que se ejecute, cuando se ejecute el proceso anterior empieza a ejecutarse.

/*
async function obtenerClientes(){
    //siempre requiere un promise

    //creo promise

    const clientes = new Promise((resolve, reject)=>{
        //simula un tiempo de carga
        setTimeout(()=>{
            resolve('Datos Descargados..')
        },3000);
    });

    //simula el error
    const error=false;

    //si no hay error espera que se ejecute los clientes y retorna la respuesta
    if(!error){
        const respuesta = await clientes;
        return respuesta;
        //si hay error hace el rechazo y da el error
    }else{
        await Promise.reject('Hay error!')
    }

}

//imprimir la respuesta
obtenerClientes()
    .then(res => console.log(res))
    .catch(error=>console.log(error));

*/

//Usar api y fetch con await:
//json a usar: https://jsonplaceholder.typicode.com/todos

async function obtenerUsuarios(){

    const respuesta= await fetch('https://jsonplaceholder.typicode.com/todos');//buscar
    
    const datos = await respuesta.json();//cargar

    return datos;
}

//mostrar datos

obtenerUsuarios()
    .then(usuarios =>console.log(usuarios));