// Implementación incorrecta
class MySQLDatabase {
    connect() {
        console.log("Conectando a MySQL...");
    }
}

// Clase de alto nivel
class UsuarioService {
    constructor() {
        this.db = new MySQLDatabase(); // ❌ Dependencia directa
    }

    getUsuarios() {
        this.db.connect();
        console.log("Obteniendo usuarios desde MySQL...");
    }
}

// Uso
const servicio = new UsuarioService();
servicio.getUsuarios();








// Uso correcto
class Database {
    connect() {
        throw new Error("Método connect() debe implementarse");
    }
}

// Implementación concreta: MySQL
class MySQLDatabase extends Database {
    connect() {
        console.log("Conectando a MySQL...");
    }
}

// Implementación concreta: MongoDB
class MongoDatabase extends Database {
    connect() {
        console.log("Conectando a MongoDB...");
    }
}

// Clase de alto nivel que depende de una abstracción
class UsuarioService {
    constructor(database) {
        this.db = database; // ✅ Recibe cualquier base de datos que cumpla con Database
    }

    getUsuarios() {
        this.db.connect();
        console.log("Obteniendo usuarios...");
    }
}

// Uso
const servicio1 = new UsuarioService(new MySQLDatabase());
servicio1.getUsuarios();

const servicio2 = new UsuarioService(new MongoDatabase());
servicio2.getUsuarios();
