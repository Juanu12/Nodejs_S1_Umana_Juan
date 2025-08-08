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
    // Quitar libro en ambos lados
    
    
}

module.exports = Autor;