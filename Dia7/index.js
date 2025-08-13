const prompt = require('prompt-sync')(); // Entradas por consola
const path = "./db.json"; // Direccionar hacia la base de datos
const fs = require('fs'); // Manjo de archivos locales 

// Modularizacion de Carga de la Data


function loadData(){
    // Compruba que si lo que digo que existe de verdad existe , manda true o false, si no existe lo crea
 if(!fs.existsSync(path)){

    fs.writeFileSync(path, "[]");

 } ;

 const data = fs.readFileSync(path); // cCarga y guarda la data en una variable
    return JSON.parse(data); // Transforma la data en json 

}

function saveData(data){
fs.writeFileSync(path,JSON.stringify(data))

}


function showMenu(){
    
console.log("\n==== CRUD en consola con node.js ===="); 
console.log("1. Crear elemento");
console.log("2. Listar elementos");
console.log("3. Actualizar elemento");
console.log("4. Eliminar elemento");
console.log("5. Salir");


let opcionUsuario = prompt("Selecciona una opcion: ");
return opcionUsuario; 

}

function handleMenu(option){

    switch(option){
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
            console.log("Opcion no valida");


    }


}

let booleanito = true;
while (booleanito){
    let opcionUsuario = showMenu();
    handleMenu(opcionUsuario);

}

function createItem(){
let  nombre = prompt("Ingresa un nombre: ");
const id = Date.now(); // Id unico (Paso de milisigundos desde el primero de enero de 1970 hasta hoy)
const data = loadData(); 
data.push( {
        id,nombre



    }
);
console.log(data);
saveData(data); 
console.log ("Elemento creado con exito");
showMenu();



}

function listItems(){
if (!fs.existsSync(path)) {
    console.log("No hay datos para mostrar");
    return;
}

const data = loadData(); 
console.log("Elemntos cargados con Éxito: ");

console.table(data)


}

function updateItem(){

    const data = loadData();

    const nombre = prompt ("Ingresa el nombre del elemento a actualizar: "); 
    const item = data.find(item => item.nombre === nombre);
    if (!item) {
        console.log("Elemento no encontrado");
        return;
    }
    const nombreNuevo = prompt("Ingresa el nuevo nombre: ");
    item.nombre = nombreNuevo; 
    console.log("Elemento actualizado con exito");

}


function deleteItem(){

    const data = loadData();
    const nombre = prompt ("Ingresa el nombre del elemento a eliminar: ");
    const item = data.find(item => item.nombre === nombre);
    if (!item) {
        console.log("Elemento no encontrado");
        return;
    }
    const index = data.indexOf(item);
    data.splice(index, 1); 
    saveData(data);
    console.log("Elemento eliminado con exito");



}