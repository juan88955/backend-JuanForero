import { Router } from 'express';
import { allCursos, courseById } from '../controllers/cursos/read.js';

const router = Router();

router.get('/all', allCursos);
router.get('/courseId/:x', courseById);

export default router;