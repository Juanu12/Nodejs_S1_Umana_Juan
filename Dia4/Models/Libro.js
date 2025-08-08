class Libro{

    constructor ( isbn, titulo){

        this.isbn = isbn;
        this.titulo = titulo;
        this._autor = null; //Referencia un autor superior

    }
    setAutor(autor) {
        this._autor = autor;
    }


}

module.exports = Libro;