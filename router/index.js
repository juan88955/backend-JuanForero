import { Router } from 'express';
import usersRouter from './users.js';
import autosRouter from './autos.js';
import proyectosRouter from './proyectos.js';
import empleadosRouter from './empleados.js';
import cursosRouter from './cursos.js';

const router = Router()

router.use('/users', usersRouter)
router.use('/autos', autosRouter)
router.use('/proyectos', proyectosRouter)
router.use('/empleados', empleadosRouter)
router.use('/cursos', cursosRouter)

export default router