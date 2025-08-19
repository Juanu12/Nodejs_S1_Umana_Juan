// El objetivo del controlador es recibir los 
// inputs de la vista basica, realizar las validaciones basicas y
//coordinar el modelo

class ItemController{

    constructor ({model,view,prompt}) {

        this.model = model;
        this.view = view;
        this.prompt = prompt;





    }

    crear() {
         const datos = this.view.pedirDatosCreacion(this.prompt);
         if (!datos.nombre) {
      
             this.view.mostraMensaje("El nombre es obligatorio");
                return;
    }

    const creado = this.model.crear(datos) 
    this.view.mostrarMensaje(`Creado con ID ${creado.id} `);



}



}