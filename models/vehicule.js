const {model, Schema} = require('mongoose')

const vehiculeSchema = new Schema({
    plate:{
        type:String,//tipo de dato
        unique:true,//unico
        required:[true, 'the plate is required'],//es obligatorio
        maxlength:[6,'max 6 characters'],//maximo
        minlength:[5,'min 5 characters']//minimo
    },
    color:{
        type:String,//tipo de dato
        //unique:true,//unico
        required:[true, 'the plate is required'],//es obligatorio
        //maxlength:[6,'max 6 characters'],//maximo
        minlength:[3,'min 3 characters']//minimo
    },
    model:{
        type:Number,
        required:[true, 'the model is required'],

    }
}
)

module.exports = model('vehicule', vehiculeSchema, 'vehicule'); //crea la coleccion si no existe 

