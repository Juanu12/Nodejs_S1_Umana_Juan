

/*
Comando super()

Es una clase qu hereda (extends) de otra, super() esuna llamada especial que hace referencia 
alñ constructor o métodos de la clase padre.

- Dentro del constructo de la clase hija, super, se usa para invcar el constructor de la clase padre

*/
const Animal = require("./Animal");

class Pajaro extends Animal{
    constructor (nombre, raza){

        super(nombre)
        this.raza = raza;

    }

    hablar(){
        console.log(` El ${this.nombre} es un ${this.raza} `);
    }


}

module.exports = Pajaro;