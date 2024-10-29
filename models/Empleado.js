import { Schema, model } from 'mongoose';

let collection = 'empleados'
let schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    proyecto: { type: Schema.Types.ObjectId, ref: 'proyectos', required: true } // Referencia al modelo Proyecto
}, {
    timestamps: true // Para que se guarde la fecha de creación y la fecha de actualización
})

let Empleado = model(collection, schema)
export default Empleado