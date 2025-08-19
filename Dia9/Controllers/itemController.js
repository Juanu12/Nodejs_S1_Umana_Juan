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
        const { nombre, descripcion } = this.view.pedirDatosCreacion(this.prompt);
        this.model.crear({ nombre, descripcion });
    }
    
  
listar () {
    const items = this.model.listar();
    const viewItem = this.view.listar(items);
     

}

actualizar () {

    const data = this.view.actualizar(this.prompt);
    if (!data.datos.nombre) {
        this.view.mostrarMensaje("El nombre es obligatorio");
        return;
    }

    if (!data.id) {
        this.view.mostrarMensaje("El id es obligatorio");
        return;
    }

    if (!data.datos.descripcion) {
        this.view.mostrarMensaje("La descripción es obligatoria");
        return;
    }
    const actualizado = this.model.actualizar(data.id, data.datos);



}

eliminar ( ) {

 const data = this.view.eliminar(this.prompt)
 if (!data.id) {
    this.view.mostrarmensaje ("El id es obligatorio");
    return;
 }

 const eliminado = this.model.eliiminar(eliminar.id)

}


buscarPorId (){

 const data = this.view.buscarPorId(this.prompt);
    if (!data.id) {
        this.view.mostrarMensaje("El id es obligatorio");
        return;
    }

 const buscar = this.model.buscarPorId(data.id)

}

}

module.exports = {ItemController};