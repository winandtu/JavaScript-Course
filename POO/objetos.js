//objeto litera(normal)

const cliente = {
    nombre: 'Danilo',
    saldo: 600,
    tipoCliente: function(){
        let tipo;

        if(this.saldo>1000){
            tipo='Gold';
        }else if (this.saldo>500){
            tipo= 'Platinum';
        }else{
            tipo= 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente());

//Objeto alternativo

function ClienteA(nombre, saldo){
    this.nombre = nombre;
    this.saldo= saldo;

    this.tipoClienteA = function(){

        let tipo;

        if(this.saldo>1000){
            tipo='Gold';
        }else if (this.saldo>500){
            tipo= 'Platinum';
        }else{
            tipo= 'Normal';
        }

        return tipo;

    }
}

//instancio

const persona = new ClienteA('Danilo A', 1200);
const person2 = new ClienteA('Jefersson',200);

console.log(persona);
console.log(person2.tipoClienteA());//Accedo al metodo