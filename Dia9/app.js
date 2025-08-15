const { ItemModel } = require("./Models/itemModel")
const model = new ItemModel();
model.crear ({nombre: "Lapicero", descripcion: "Azul"})

console.log(model.listar());