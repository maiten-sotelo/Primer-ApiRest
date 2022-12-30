const express = require("express");
/* INICIALIZO EL EXPRESS */
const app = express();
/* CONEXION CON MONGODB */
const mongoose = require("mongoose");
/* LLAMO AL BODY PARSE */
const bodyParser = require("body-parser");
/* REQUIERO LA RUTA */
const userRoute = require("./routes/user");
/* IMPORTO EL MIDDLEWARE DEL LOG */
const log = require("./middlewares/log");
const authentication = require("./middlewares/authentication");


/* MIDDLEWARE A NIVEL DE APLICACION */
app.use(log);
app.use(express.json());

/* CREO UNA NUEVA RUTA , TAMBIEN SE PUEDE PONER EL MIDDLEWARE DENTRO DE LA RUTA, DETRAS DE EL PATH */
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express!")
})
/* AGREGRA MI RUTA A LA APLICACION PRINCIPAL */
app.use("/user", authentication, userRoute);

/* CONEXION DE MONGOOSE CON LA BD */
mongoose.connect("mongodb://127.0.0.1:27017/apiRest", (error) => {
    if (error){
       console.log("Hubo un error en la conexion a MongoDB", error); 
    } else {
        console.log("Conexion exitosa con MongoDB");
    }
});

/* DECLARACION DEL PUERTO DEL SERVIDOR */
app.listen(3000);