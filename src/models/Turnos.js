import {Schema, model} from 'mongoose'

const turnosSchema = new Schema({
    nombreCliente: String,
    apellidoCliente:String,
    fechaTurno:String,
    horarioTurno:String,
    realizadoPor:{
        type:String,
        default:""
    },
    userId: {ref:"User",
    type: Schema.Types.ObjectId}

},{
    versionKey:false
}
);

export default model ("turnos",turnosSchema)