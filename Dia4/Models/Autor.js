// Autor conoce sus libros y cada libro conoce a su autor

class Autor {

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
        this.libros = [];
    }
    agregarLibro(libro){
        if (!this.libros.includes(libro) ){

            this.libros.push(libro);
            libro.setAutor(this);

        }

        

    }
    eliminarLibro(libro) {
    const index = this.libros.indexOf(libro);
    // buscamos  libros del array con el indexoff, el index es la posicion o el lugar donde se encuentra el libro
    if (index !== -1) {
        // Revisa que el index sea differente a -1, ya que si es este numero significa que no hay libro
        this.libros.splice(index, 1);
        // Si encuentra el libro , lo elimina con splice , revisa la posicion , e indica que se elimina un libro
        libro.setAutor(null);
        // Se pone un autor null al libro que se elimina
    }
}

    // Quitar libro en ambos lados
    
    
}

module.exports = Autor;