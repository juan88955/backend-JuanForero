import { Router } from 'express';
import { allCursos, courseById } from '../controllers/cursos/read.js';  
import { create } from '../controllers/cursos/create.js';
import { update } from '../controllers/cursos/update.js';

const router = Router();

router.get('/all', allCursos);
router.get('/courseId/:x', courseById);
router.post('/create', create);
router.put('/update', update); // PUT es para actualizar

export default router;