// Antes de usar SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Guarda usuario en una base de datos 
  }

  sendEmail() {
    // Manda un e-mail de bienvenida
  }
}

// Una clase no puede tener tantas responsabilidades 

// Luego de SRP
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  saveToDatabase(user) {
  }
}

class EmailService {
  sendWelcomeEmail(user) {

  }
}

// Aquí se crean Funciones para las nuevas clases que se planean usar