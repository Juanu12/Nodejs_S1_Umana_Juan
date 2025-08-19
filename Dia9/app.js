const prompt = require('prompt-sync')();

const {ItemModel} = require('./Models/itemModel');
const Itemview = require('./views/itemView');
const {ItemController} = require('./Controllers/itemController');


const model = new ItemModel();
const view = Itemview;
const controller = new ItemController({model, view, prompt});


function main(){

    let salir = false;
    while (!salir) {
        view.mostrarMenu();
        const op = view.pedirOpcion(prompt)
        switch (op){
            case "1":
                controller.crear();
            

            case "2":
                controller.listar()


            case "3":  
                controller .buscarPorId();

            case "4":
                controller.actualizar();
            
            case "5":
                controller.eliminar();

            case "0":
            salir = true;;
            view.mostrarMensaje("Hata luego");

            default:
                view.mostrarMensaje("Opción no válida")


        }

    }


}


main();