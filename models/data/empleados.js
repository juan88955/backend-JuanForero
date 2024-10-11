import "dotenv/config.js";
import '../../config/database.js'
import Empleado from '../Empleado.js'

let empleados = [
    {
      firstName: "Juan",
      lastName: "Fernández",
      email: "juan.fernandez@email.com",
      phone: "123456789",
      address: "Calle 123, 123 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/juan.jpg",
      role: 1
    },
    {
      firstName: "Carlos",
      lastName: "Hernández",
      email: "carlos.hernandez@email.com",
      phone: "987654321",
      address: "Calle 456, 456 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/carlos.jpg",
      role: 2
    },
    {
      firstName: "Pedro",
      lastName: "Rodríguez",
      email: "pedro.rodriguez@email.com",
      phone: "876543210",
      address: "Calle 789, 789 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/pedro.jpg",
      role: 1
    },
    {
      firstName: "María",
      lastName: "Pérez",
      email: "maria.perez@email.com",
      phone: "654321098",
      address: "Calle 987, 987 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/maria.jpg",
      role: 3
    },
    {
      firstName: "Luis",
      lastName: "Martínez",
      email: "luis.martinez@email.com",
      phone: "543210987",
      address: "Calle 654, 654 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/luis.jpg",
      role: 2
    },
    {
      firstName: "Ana",
      lastName: "Rodríguez",
      email: "ana.rodriguez@email.com",
      phone: "321098765",
      address: "Calle 321, 321 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/ana.jpg",
      role: 1
    },
    {
      firstName: "Juan",
      lastName: "Pérez",
      email: "juan.perez@email.com",
      phone: "098765432",
      address: "Calle 098, 098 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/juan.jpg",
      role: 3
    },
    {
      firstName: "Carlos",
      lastName: "Hernández",
      email: "carlos.hernandez@email.com",
      phone: "987654321",
      address: "Calle 456, 456 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/carlos.jpg",
      role: 2
    },
    {
      firstName: "Pedro",
      lastName: "Rodríguez",
      email: "pedro.rodriguez@email.com",
      phone: "876543210",
      address: "Calle 789, 789 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/pedro.jpg",
      role: 1
    },
    {
      firstName: "María",
      lastName: "Pérez",
      email: "maria.perez@email.com",
      phone: "654321098",
      address: "Calle 987, 987 Barrio, Ciudad",
      password: "123456",
      photo: "https://example.com/photos/maria.jpg",
      role: 3
    }
];

Empleado.insertMany(empleados) // Inserta los datos en la base de datos