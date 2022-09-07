import {Schema, model} from 'mongoose'

const productVendidoSchema = new Schema({
    producto:{
        ref:'Product',
        type: Schema.Types.ObjectId
    },
    cantVentas:Number,
    fecha:String,
    month:String,
    year:String
    
},
{
    timestamps:true,
    versionKey:false
})

export default model('ProductVendido', productVendidoSchema);