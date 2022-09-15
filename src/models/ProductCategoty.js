import {Schema, model} from 'mongoose'

const categoryProductSchema = new Schema({
    name:String,
    userId: {ref:"User",
    type: Schema.Types.ObjectId}

},{
    versionKey:false
}
);

export default model ("categoryProduct",categoryProductSchema)