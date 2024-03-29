import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    nombre:{
        type:String,

    },
    apellido:{
        type:String,

    },
    email: {
        type:String,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    firstTime:{
        type:Boolean,
        default:true
    },
    roles:[{
        ref:"Role",
        type: Schema.Types.ObjectId
    }],
    nombreSalon:{
        type:String
    },
    isModerator:{
        type:Boolean,
        default:false
    },
    idAdmin:{
        type:String,
        default:" "
    },
    userActive:{
        type:Boolean,
        default:true
    }

},{
    timestamps:true,
    versionKey:false
});

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}


userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
    
}


export default model('User',userSchema) 