import {Schema, model} from 'mongoose'

const turnoCompletoSchema = new Schema({
    nombreCliente: String,
    apellidoCliente:String,
    fechaTurno:String,
    horarioTurno:String,
    realizadoPor:{
        type:String,
        default:""
    },
    userId: {ref:"User",
    type: Schema.Types.ObjectId
    },
    monto:Number,
    observaciones:String

},{
    versionKey:false
}
);

export default model ("turnosCompleto",turnoCompletoSchema)