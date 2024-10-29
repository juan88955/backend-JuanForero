import { Schema, model } from 'mongoose';

let collection = 'proyectos'
let schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    startDate: {type: Date, required: true},
    expectedEndDate: {type: Date, required: true},
    budget: {type: Number, required: true},
    clientId: {type: Number, required: true},
    isCompleted: {type: Boolean, required: true},
    priority: {type: Number, required: true},
    teamSize: {type: Number, required: true},
    status: {type: String, required: true},
    empleado: { type: Schema.Types.ObjectId, ref: 'empleados', required: true } // Referencia al modelo Empleado
},{
    timestamps: true // Para que se guarde la fecha de creación y la fecha de actualización
})

let Proyecto = model(collection, schema)
export default Proyecto