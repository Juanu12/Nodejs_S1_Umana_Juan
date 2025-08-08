/*
La herencia permite crear nuevas clases a partir tde otras, mediante la reutilizacion 
de atributos y métodos
*/


class Animal{

    constructor(nombre){
        this.nombre = nombre;

    }

    hablar(){
        console.log(`  ${this.nombre} está haciendo ruido.  `)
    }



}


module.exports = Animal