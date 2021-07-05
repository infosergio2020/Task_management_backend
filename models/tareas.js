const { Schema, model} = require('mongoose');
//Definicion del modelo de la imagen
const TareaSchema = new Schema({
    nombre: { type: String },
    fechaTentativa: { type: Date, default: Date.now()},
    fechaFin:{ type: Date, default: Date.now()},
    fechaInicio:{ type: Date, default: Date.now()},
    fecha_creacion_tarea: { type: Date,default: Date.now() }
});
//para utilizar la definicion necesitamos crear el modelo
module.exports = model('Tarea',TareaSchema);