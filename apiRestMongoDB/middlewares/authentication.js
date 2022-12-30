/* AQUI SE DEFINEN RUTAS PRIVADAS */

function authentication(req, res, next){
    /* todo: AGREGAR LOGICA DE AUTENTICACION DE RUTA */
    next();
}

module.exports = authentication; 