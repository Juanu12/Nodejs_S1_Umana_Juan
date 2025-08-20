const {objectId} = require('mongodb'); // Cogemos los ids de mongodb
const connectDB = require('../db'); 


class UserModel {
    constructor() {
        this.schema = {
            nombre: 'string',
            correo: 'string',
            edad: 'number'


        };



    }


    validar (usuario) {             // Valida que los campos existan
        for (let campo in this.schema) {
          if (typeof usuario[campo] !== this.schema[campo]) {
          return false;
          }


        }
        return true;

    }

    async crear (usuario) {

        if (!this.validar(usuario)){
            throw new Error('Error en el tipo de datos');

        }
        const db = await connectDB(); 
        const result = await db.collection('usuarios').insertOne(usuario); // Inserta el usuario en la colección usuarios
        return result.insertedId; // Retorna el id del usuario insertado


    }


    async listar(){
        const db = await connectDB(); 
        let arreglo = await db.collection('usuarios').find().toArray(); // Busca todos los usuarios y los convierte a un array
        await connectDB.disconnect(); // Cierra la conexión a la base de datos

        return arreglo; // Retorna el array de usuarios
    }


}

module.exports = UserModel; 