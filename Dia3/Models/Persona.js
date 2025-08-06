class Persona {

// Atributo en Js se integra ene l constructor

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;



    }       

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo la edad ${this.edad}`)

    }



}

module.exports = Persona;
