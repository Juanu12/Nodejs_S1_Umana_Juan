const { loadData, saveData } = require("../Models/Db"); // Importamos las funciones que tiene que ver con el json

const prompt = require('prompt-sync')(); // Importamos el prompt-sync para poder preguntar al usuario

function createItem () {

    const id = Date.now(); // Se crea un id único, con el momento actual
    const nombre = prompt ("Ingresa un nombre:") // Aqui preguntamos por el nombre que se va a crear
    const data = loadData(); // Cargamaos la data 
    data.push({

             
        id, nombre // Aqui agregamos el id unico y el nombre que ngresa el usuario

    } 
      

    )
    
    saveData(data); // Guardamos la data en el json



    console.log ("Elemento creado con exito"); 



}


function listItems () {

    const data = loadData(); // Cargamos la data del json
    console.table(data); // Mostramos la data en forma de tabla

}

function updateItem(){

    const data= loadData();
    const nombre = prompt ("Ingrese el nombre que desea actualizar: "); // Preguntamos por el nombreque se desea actualizar
    const itemfound = data.find (item => item.nombre === nombre); // Buscamos el item que tenga el mismo nombre que el ingresado por el usuario

    if (!itemfound) { // Si no se encuentra el item, mostramos un mensaje de error
        console.log ("Elemento no encontrado");
        return;
    }

    const nombrenuevo = prompt ("Ingrese el nuevo nombre: "); // Preguntamos por el nuevo nombrer a ingresar

    itemfound.nombre = nombrenuevo; //Actualizamos el item

    saveData(data); 

    console.log ("Elemento actualizado con exito");
    


}

function deleteItem(){
    const data = loadData(); 
    const nombre = prompt ("Ingrese el nombre del elemento a eliminar: "); // Preguntamos por el nombre del item a eliminar
    const itemfound = data.find(item => item.nombre === nombre); 
    if (!itemfound) { 
        console.log ("Elemento no encontrado");
        return;
    }

    const index = data.indexOf(itemfound); // Obtenemos el indice del item a eliminar
    data.splice(index, 1); // Eliminamos el item del array, y especificamos que es solo 1

    saveData(data);
    console.log ("Elemento eliminado con exito");

}

module.exports = { createItem, listItems, updateItem, deleteItem } // Expoprtamos las funciones que acabamos de crear

