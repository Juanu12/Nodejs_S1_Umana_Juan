const promptSync = require('prompt-sync')();

const {ItemModel} = require('./Models/itemModel');
const {Itemview} = require('./views/itemView');
const {ItemController} = require('./Controllers/itemController');


const model = new ItemModel();
const view = new Itemview();
const controller = new ItemController({model, view, promptSync});


function main(){

    let salir = false;
    while (!salir) {
        view.mostrarMenu();
        view.pedirOpcion(promptSync)
        switch (op){
            case "1":
                controller.crear();
            
            case "0":
            salir = true;;
            view.mostrarMensaje("Hata luego");

            default:
                view.mostrarMensaje("Opción no válida")


        }

    }


}