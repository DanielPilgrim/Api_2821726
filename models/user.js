import {schema, model} from 'mongoose'

const userSchema = new Schema ({
    email: {
        type : String,
        required : [true, 'email is required'],
        unique: [true,'email already exists']
    },
    password: {
        type: String,
        required : [true, 'password is required'],
        minlegend :[10, 'min length 10 characters']
    }
},
{
    timestamp: true,
    versionkey: false,
}
)

export default model('user', userSchema, 'user');