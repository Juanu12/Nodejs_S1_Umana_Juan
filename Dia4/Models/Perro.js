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


/*
El polimorfsmo permite que métodos con el mismo nombre se comporten de manera diferente segun el objeto que los invoque

*/

module.exports = Perro