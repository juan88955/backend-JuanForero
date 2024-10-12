import express from 'express';
import "dotenv/config.js";
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './router/index.js';

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in :" + PORT);

server.use(express.json()) // permite trabajar con JSON en entrada y salida
server.use(express.urlencoded({ extended: true })) // permite trabajar con URL en entrada y salida
server.use(cors()) // permite trabajar con CORS
server.use(morgan('dev')) // registrar las peticiones en consola

// router
server.use('/api', indexRouter)

server.listen(PORT, ready)





