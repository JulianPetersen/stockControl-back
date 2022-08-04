import {Schema, model} from 'mongoose'
import appConfig from '../config';

const productSchema = new Schema({
    name:String,
    category:String,
    price:Number,
    imgUrl:String,
    stock:Number
},
{
    timestamps:true,
    versionKey:false
})


productSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

export default model('Product', productSchema);