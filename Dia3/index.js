// P.O.O


// ¿Que es la P.O.O?

// Es un paradigma de programación que se basa en el uso de "objetos" psara representar entidades del mundo real dentro
// del software ada objeto es una instancia de una clase , donde una clase es una plantilla
// que define las propiedades (atributos) y comportamientos(métodos) que los objetos de este tipo tendrán






/* En términos generales, los pilares del P.O.O son:

Abstraccion: Representar entidades del mundo real comn sus caracteristicas esenciales


*/
const Persona = require('./Models/Persona');
const CuentaBancaria = require ('./Models/CuentaBancaria')
const Perro = require ('./Models/Perro')



const pedro = new Persona ('Pedro', 25);
pedro.saludar()

const cuenta = new CuentaBancaria ('Pedro', 1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo())
// console.log (cuenta.#saldo) No se puede acceder asi a valores privados

const animal1 = new Perro("Paco");
animal1.hablar();
