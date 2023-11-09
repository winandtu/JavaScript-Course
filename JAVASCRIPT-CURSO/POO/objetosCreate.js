//object.create

const Cliente = {

    imprimirSaldo: function(){
        return `Cliente: ${this.nombre}, Saldo Actual: ${this.saldo}`
    },

    retirarSaldo: function(retiro){
        return this.saldo-=retiro;
        
    }
}

const danilo = Object.create(Cliente);
danilo.nombre= 'Danilo';
danilo.saldo=1000;

console.log(danilo);
danilo.retirarSaldo(500); //hago el retiro e imprime el nuevo saldo abajo
console.log(danilo.imprimirSaldo());//imprime la propiedad o función del objeto

