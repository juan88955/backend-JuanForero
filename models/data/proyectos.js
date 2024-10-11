import "dotenv/config.js";
import '../../config/database.js'
import Proyecto from '../Proyecto.js'

let proyectos = [
    {
      name: "Proyecto 1",
      description: "Descripción del proyecto 1",
      startDate: new Date("2023-01-01"),
      expectedEndDate: new Date("2023-12-31"),
      budget: 10000,
      clientId: 1,
      isCompleted: false,
      priority: 1,
      teamSize: 2,
      status: "En progreso"
    },
    {
      name: "Proyecto 2",
      description: "Descripción del proyecto 2",
      startDate: new Date("2023-01-01"),
      expectedEndDate: new Date("2023-12-31"),
      budget: 20000,
      clientId: 2,
      isCompleted: false,
      priority: 2,
      teamSize: 3,
      status: "En progreso"
    },    
    {
      name: "Proyecto 3",
      description: "Descripción del proyecto 3",
      startDate: new Date("2023-01-01"),
      expectedEndDate: new Date("2023-12-31"),
      budget: 30000,
      clientId: 3,
      isCompleted: false,
      priority: 3,
      teamSize: 4,
      status: "En progreso"
    },
    {
      name: "Proyecto 4",
      description: "Descripción del proyecto 4",
      startDate: new Date("2023-01-01"),
      expectedEndDate: new Date("2023-12-31"),
      budget: 40000,
      clientId: 4,
      isCompleted: false,
      priority: 4,
      teamSize: 5,
      status: "En progreso"
    },
    {
      name: "Proyecto 5",
      description: "Descripción del proyecto 5",
      startDate: new Date("2023-01-01"),
      expectedEndDate: new Date("2023-12-31"),
      budget: 50000,
      clientId: 5,
      isCompleted: false,
      priority: 5,
      teamSize: 6,
      status: "En progreso"
    }
  ];

Proyecto.insertMany(proyectos) // Inserta los datos en la base de datos