import {Schema, model} from 'mongoose'


const ventaSchema = new Schema({
    producto:{
        ref:'Product',
        type: Schema.Types.ObjectId
    },
    monto:Number,
    metodoPago:String,
    fecha:String
},
{
    timestamps:true,
    versionKey:false
})

export default model('Venta', ventaSchema);