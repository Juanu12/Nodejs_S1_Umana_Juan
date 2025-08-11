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
const Gato = require ('./Models/Gato');
const Pajaro = require('./Models/Pajaro');

const pedro = new Persona ('Pedro', 25);
pedro.saludar()

const cuenta = new CuentaBancaria ('Pedro', 1000);
cuenta.depositar(500);
console.log(cuenta.verSaldo())
// console.log (cuenta.#saldo) No se puede acceder asi a valores privados

const animal1 = new Perro("Paco");
animal1.hablar();

const animal2 = new Gato("Mechas");
animal2.hablar();

const animal3 = new Pajaro("Piolin","Canario");

animal3.hablar();


// Asociación

const LineItem = require('./Models/LineItem');
const Pedido = require('./Models/Pedido');

const pedido1 =  new Pedido ('P-001')
pedido1.addItem(new LineItem('Manzanas', 3, 1.2));
pedido1.addItem(new LineItem('Peras', 2, 1.5));

console.log(`Total Pedido:` , pedido1.total());


//Bidireccional


const Autor = require('./Models/Autor');
const Libro = require('./Models/Libro');


const aurtor1 = new Autor(1, 'Gabriel García Márquez');
const libro1 = new Libro( '978-1','Amor en los timpos de Cólera');
const libro2 = new Libro( '978-2','Cien años de soledad');

console.log(libro1);
aurtor1.agregarLibro(libro1);
aurtor1.agregarLibro(libro2)
console.log(aurtor1);
console.log(aurtor1);

aurtor1.eliminarLibro(libro2)