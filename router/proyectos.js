import { Router } from 'express';
import { allProyectos, proyectosPorClientId } from '../controllers/proyectos/read.js';
import { create } from '../controllers/proyectos/create.js';
import { update } from '../controllers/proyectos/update.js';

const router = Router();

router.get('/all', allProyectos);
router.get('/cliente/:x', proyectosPorClientId);
router.post('/create', create);
router.put('/update', update); // PUT es para actualizar

export default router;