import {Schema, model} from 'mongoose'

const categoryProductSchema = new Schema({
    name:String,

},{
    versionKey:false
}
);

export default model ("categoryProduct",categoryProductSchema)