import {Schema, model} from 'mongoose'


const ventaSchema = new Schema({
    producto:{
        ref:'Product',
        type: Schema.Types.ObjectId
    },
    monto:Number,
    metodoPago:String,
    fecha:String,
    month:String,
    year:String,
    userId: {ref:"User",
    type: Schema.Types.ObjectId}
    
},
{
    timestamps:true,
    versionKey:false
})

export default model('Venta', ventaSchema);