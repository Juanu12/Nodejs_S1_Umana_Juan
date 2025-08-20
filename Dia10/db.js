// conexion hacia la base de datosw
require ('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.URI;
const dbName = '';

console.log(uri);

let client;

let db;

async function connect() {

if (db) return db // Retorna la variable si ya tiene una conexion
client = new MongoClient(uri); // Importsa mongodbclient a client
await client.connect();  // Abre la conexion 
db = client.db(dbName); // Selecciona la base de datos
return db; // retorna la conexión anidada a la BBDD 


}

async function close() {
    if (client) await client.close(); // Cierra la conexión si existe

}