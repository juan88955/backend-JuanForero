import "dotenv/config.js";
import '../../config/database.js'
import Curso from '../Curso.js'

let cursos = [
    {
      courseId: "C01",
      title: "Curso de JavaScript",
      instructor: "Juan Fernández",
      department: "Ingeniería Informática",
      credits: 4,
      capacity: 50,
      enrollmentCount: 20,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 2
    },
    {
      courseId: "C02",
      title: "Curso de Node.js",
      instructor: "Carlos Hernández",
      department: "Ingeniería Informática",
      credits: 3,
      capacity: 30,
      enrollmentCount: 15,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 4
    },
    {
      courseId: "C03",
      title: "Curso de React",
      instructor: "Pedro Rodríguez",
      department: "Ingeniería Informática",
      credits: 2,
      capacity: 40,
      enrollmentCount: 10,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 6
    },
    {
      courseId: "C04",
      title: "Curso de Angular",
      instructor: "María Pérez",
      department: "Ingeniería Informática",
      credits: 1,
      capacity: 50,
      enrollmentCount: 5,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 8
    },
    {
      courseId: "C05",
      title: "Curso de PHP",
      instructor: "Luis Martínez",
      department: "Ingeniería Informática",
      credits: 3,
      capacity: 30,
      enrollmentCount: 15,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 4
    },
    {
      courseId: "C06",
      title: "Curso de Python",
      instructor: "Ana Rodríguez",
      department: "Ingeniería Informática",
      credits: 2,
      capacity: 40,
      enrollmentCount: 10,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 6
    },
    {
      courseId: "C07",
      title: "Curso de Java",
      instructor: "Juan Pérez",
      department: "Ingeniería Informática",
      credits: 1,
      capacity: 50,
      enrollmentCount: 5,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 8
    },
    {
      courseId: "C08",
      title: "Curso de C++",
      instructor: "Carlos Hernández",
      department: "Ingeniería Informática",
      credits: 3,
      capacity: 30,
      enrollmentCount: 15,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 4
    },
    {
      courseId: "C09",
      title: "Curso de Ruby",
      instructor: "Pedro Rodríguez",
      department: "Ingeniería Informática",
      credits: 2,
      capacity: 40,
      enrollmentCount: 10,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 6
    },
    {
      courseId: "C10",
      title: "Curso de Go",
      instructor: "María Pérez",
      department: "Ingeniería Informática",
      credits: 1,
      capacity: 50,
      enrollmentCount: 5,
      isOnline: true,
      startDate: new Date("2023-01-01"),
      duration: 8
    }
  ];

Curso.insertMany(cursos) // Inserta los datos en la base de datos