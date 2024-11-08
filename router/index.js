import { Router } from 'express';
import usersRouter from './users.js';
import autosRouter from './autos.js';
import proyectosRouter from './proyectos.js';
import empleadosRouter from './empleados.js';
import cursosRouter from './cursos.js';
import auth from './auth.js';

const router = Router()

router.use('/users', usersRouter)
router.use('/autos', autosRouter)
router.use('/proyectos', proyectosRouter)
router.use('/empleados', empleadosRouter)
router.use('/cursos', cursosRouter)
router.use('/auth', auth)

export default router