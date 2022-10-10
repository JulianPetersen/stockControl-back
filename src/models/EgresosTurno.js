import {Schema, model} from 'mongoose'

const EgresosTurnosSchema = new Schema({

    fechaEgreso:String,
    userId: {ref:"User",
    type: Schema.Types.ObjectId
    },
    monto:Number,
    concepto:String,
    month:String,
    year:String,
    metodoPago:String

},{
    versionKey:false
} 
);

export default model ("egresoTurno",EgresosTurnosSchema)