const {model, Schema} = require('mongoose')

const ownerSchema = new Schema({
    id:{
        type:String,//tipo de dato
        unique:true,//unico
        required:[true, 'the id is required'],//es obligatorio
        maxlength:[6,'max 6 characters'],//maximo
        minlength:[3,'min 3 characters']//minimo
    },
    name:{
        type:String,//tipo de dato
        //unique:true,//unico
        required:[true, 'the name is required'],//es obligatorio
        //maxlength:[6,'max 6 characters'],//maximo
        //minlength:[3,'min 3 characters']//minimo
    },
    email:{
        type:String,
        required:[true, 'the email is required'],

    }
}
)

module.exports = model('owner', ownerSchema, 'owner'); //crea la coleccion si no existe 

