const Animal = require ("./Animal")

class Perro extends Animal{
    // Soobreescritura de método

    hablar(){
        console.log (` ${this.nombre} está ladrando `)
    }


}

/*
Aqui, perro hereda de Animal, lo cual evita la duplicacion de código, facilitando el mantemnimiento del mismo 
y la extension de comportamientops con facilidad 

*/

module.exports = Perro