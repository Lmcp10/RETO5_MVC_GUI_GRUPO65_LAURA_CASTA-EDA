const mongoose= require ('mongoose'); 
const {Schema} = mongoose; 

const roles ={
    values: ['Admin','Socio'],
    message: '{value} no es un rol valido'
}
const socioSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    apellido: {type: String, required: [true, 'Apellido obligatorio']},
    telefono: Number,
    correo: {type: String, required: [true, 'Correo obligatorio']}, 
    documento: {
        type: String, 
        required: [true, 'Documento obligatorio'],
        unique: true
    }, 
    contraseña: {type: String, required: [true, 'contraseña obligatorio']},
    rol: {type: String, default:'Socio', enum:roles},

});

module.exports=mongoose.model('socio',socioSchema)