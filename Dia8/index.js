const { showMenu } = require("./View/view");
const { createItem, listItems, updateItem, deleteItem } = require("./Controller/Controller");


// Importamos todas las funciones relacionadas al menu , crear , actualiza¿r mostrar y borrar items


let booleanito = true;

while (booleanito) {
    const opcion = showMenu();

    switch (opcion) {
        case "1":
            createItem();
            break;
        case "2":
            listItems();
            break;
        case "3":
            updateItem();
            break;
        case "4":
            deleteItem();
            break;
        case "5":
            booleanito = false;
            break;
        default:
            console.log("Opción no válida");
    }
}
