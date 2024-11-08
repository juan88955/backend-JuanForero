import mongoose from 'mongoose';

let url = process.env.URI_MONGO;

console.log(url);

async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}

coneccionBaseDeDatos()
