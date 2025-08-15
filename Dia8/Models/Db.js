const fs = require('fs');

const path = "./db.json";

function loadData(){
    // Compruba que si lo que digo que existe de verdad existe , manda true o false, si no existe lo crea
 if(!fs.existsSync(path)){

    fs.writeFileSync(path, "[]");

 } ;

 const data = fs.readFileSync(path); // Carga y guarda la data en una variable
    return JSON.parse(data); // Transforma la data en json 

}

function saveData(data){
fs.writeFileSync(path,JSON.stringify(data))

}

module.exports =  {loadData, saveData};