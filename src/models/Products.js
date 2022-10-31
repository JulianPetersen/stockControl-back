import {Schema, model} from 'mongoose'
import appConfig from '../config';

const productSchema = new Schema({
    name:String,
    category:String,
    price:Number,
    imgUrl:String,
    stock:Number,
    userId: {ref:"User",
    type: Schema.Types.ObjectId}
    
},
{
    timestamps:true,
    versionKey:false
})

//Desarrollo
// productSchema.methods.setImgUrl = function setImgUrl (filename){
//     const {host, port} = appConfig
//     this.imgUrl = `${host}:${port}/public/${filename}`
// }


//produccion
productSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host} = appConfig
    this.imgUrl = `${host}/public/${filename}`
}

export default model('Product', productSchema);