import { Schema, model } from 'mongoose';

let collection = 'autos'
let schema = new Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true } // Referencia al modelo User
},{
    timestamps: true // Para que se guarde la fecha de creación y la fecha de actualización
})

let Auto = model(collection, schema)
export default Auto