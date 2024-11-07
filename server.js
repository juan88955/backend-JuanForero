import express from 'express';
import "dotenv/config.js";
import './config/database.js';
import cors from 'cors';
import morgan from 'morgan';
import indexRouter from './router/index.js';
import not_found_handler from './middlewares/not_found_handler.js';
import error_handler from './middlewares/error_handler.js';
import error_400 from './middlewares/error_400.js';

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("server ready in :" + PORT);

server.use(express.json()) // permite trabajar con JSON
server.use(express.urlencoded({ extended: true })) // permite capturar consultas complejas
server.use(cors()) // para permitir origenes diferentes
server.use(morgan('dev')) // registrar las peticiones en consola

// router
server.use('/api', indexRouter)
server.use(not_found_handler)
server.use(error_400)
server.use(error_handler)

server.listen(PORT, ready)





