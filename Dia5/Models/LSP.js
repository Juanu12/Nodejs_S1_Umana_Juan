class Bird {
    fly() { console.log("Vuelo"); }
}

class Penguin extends Bird {
    fly() { throw new Error("No puedo volar"); }
}


//Aqui la clase pinguino no tiene una caracteristica comun con la clase padre, por lo tanto se rompe el programa


class Bird {
    layEggs() { console.log("Pone un huevo"); }
}

class FlyingBird extends Bird {
    fly() { console.log("Vuelo"); }
}

class Penguin extends Bird {
    swim() { console.log("Nado"); }
}

// Aqui la clase ave , tiene una funcion que todas las subclases pueden realizar , y las subclases tienen 
// Sus funciones individuales, y si falta la clase padre, las demas pueden ejercer su funcion y las de ellas