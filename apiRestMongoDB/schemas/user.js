/* mapearemos las diferentes tipos de datos que va a permitir esta coleccion de nuestra BD */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
/* DEFINICION DE ESQUEMA */
const userSchema = new Schema({
    id: String,
    name: String,
    lastName: String,
    age: Number
});

/*  CREACION DEL MODELO, VA A SER EL OBJETO QUE VAMOS A UTILIZAR DENTRO DE LA APLICACION DE EXPRESS PARA PODER INSERTAR, ELIMINAR, ETC*/

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
/* AHORA SI PODEMOS EMPEZAR A CREAR DATOS DENTRO DE NUESTRA API */
