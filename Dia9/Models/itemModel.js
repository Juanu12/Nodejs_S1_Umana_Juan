// Models/ itemModel.js
// Modelo + repositorio en memoria para Items
// los {} son por que se va a ingresar un diccionario 

// Se crea la clase Item, se crea el ItemModel con un arreglo privado y métodos CRUD
class Item{
    constructor({id,nombre,descripcion}) {

        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();


    }


}

class ItemModel {

 constructor() {

    this._items = []; // Con _items se indica que es privado, no se debe acceder directamente desde fuera de la clase
    this._seq =1; 

  }

  crear (nombre,descripcion) {
    const nuevo = new Item ({

        id: this._seq++,
        nombre : (nombre || '').toString().trim(),
        descripcion : ( descripcion || '').toString().trim()




    });

    this._items.push(nuevo);
    return nuevo;

 }

listar() {
    return [...this._items];
}

buscarPorId(id) {
    return this._items.find( i =>i["id"] === Number(id)) || null;
}



// recibe id, y el diccionario con  nombre y descripcion
actualizar (id,{nombre, descripcion}) {

 const item = this.buscarPorId(id); // se reutiliza un método  

 if (!item) return null;

 if (typeof nombre === 'string') item.nombre = nombre.trim(); // A nivel empresarial se pueden usar los if single line , para qiue se entiendan mas facil
 if (typeof descripcion === 'string') item.descripcion = descripcion.trim();
 item.actualizadoEn = new Date();
    return item;



}

eliminar (id){
    // idx es igual a indice (index)
const idx = this._items.findIndex ( i => i["id"] === Number(id));

// Es mejor con -1, ya que si no lo encuentra es -1

if (idx === -1) return false;
this._items.splice(idx,1); // Elimina un elemento con splice ,idx, es cuendo lo busca en el index y  1 es la cantidad de elementos a eliminar

return true; // Si se elimina devuelve true
}





}

module.exports = {ItemModel};