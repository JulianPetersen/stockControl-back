import {Schema, model} from 'mongoose'


const gastoSchema = new Schema({
    concepto:String,
    monto:Number,
    metodoPago:String,
    fecha:String
},
{
    timestamps:true,
    versionKey:false
})

export default model('Gasto', gastoSchema);