// La vista busca centraliozar toda la interacción por consola qure incvluye menu, prompts y formato de salida

const Itemview = {

    mostrarMenu() {

     console.log("\n === CRUD de Items (MVC, consola) ===\n"); // Modelo solo enfocado en items 
        console.log( "1.) Crear");
        console.log( "2.) Listar");
        console.log( "3.) ver por id");
        console.log( "4.) Actualizar");
        console.log( "5.) Eliminar");
        console.log( "0.) Salir");


    },

    pedirOpcion(prompt) {

        const op = prompt("Elije una opción: ");
        return op.trim();
    },

    pedirDatosCreacion(prompt) {
        const nombre = prompt("nombre ").trim();
        const descripcion = prompt("descripcion ").trim();
        return { nombre, descripcion };


    },

    mostratMensaje(msg){
        console.log(`\n ${msg}`);
    }, 

    listar (items) {
        if (items.length === 0) {
            console.log("\n No hay items para mostrar");
            return;
        }
        console.table(items);
    },

    actualizar (id, prompt) {
        id = prompt("Id para actualizar: ").trim();
        const nombre = prompt("Nuevo nombre: ").trim();
        const descripcion = prompt("Nueva descripción: ").trim();
        const datos = { nombre, descripcion };
        return { id, datos };
     

    },

    eliminar(prompt) {
        const id = prompt("Id para eliminar: ").trim();
        return id;
    },

    buscarPorId (id, prompt) {
        id = prompt("Id a buscar: ").trim();
        return id;

    }
};


module.exports = Itemview;