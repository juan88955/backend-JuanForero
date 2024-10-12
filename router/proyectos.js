import { Router } from 'express';
import { allProyectos, proyectosPorClientId } from '../controllers/proyectos/read.js';

const router = Router();

router.get('/all', allProyectos);
router.get('/cliente/:x', proyectosPorClientId);

export default router;