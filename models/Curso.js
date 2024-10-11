import { Schema, model } from 'mongoose';

let collection = 'cursos'
let schema = new Schema({
    courseId: { type: String, required: true },
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    department: { type: String, required: true },
    credits: { type: Number, required: true },
    capacity: { type: Number, required: true },
    enrollmentCount: { type: Number, required: true },
    isOnline: { type: Boolean, required: true },
    startDate: { type: Date, required: true },
    duration: { type: Number, required: true }
}, {
    timestamps: true // Para que se guarde la fecha de creación y la fecha de actualización
})

let Curso = model(collection, schema)
export default Curso