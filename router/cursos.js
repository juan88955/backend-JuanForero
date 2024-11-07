import { Router } from 'express';
import { allCursos, courseById } from '../controllers/cursos/read.js';  
import { create } from '../controllers/cursos/create.js';
import { update } from '../controllers/cursos/update.js';
import { deleteOne } from '../controllers/cursos/delete.js';
import validator from '../middlewares/validator.js';
import schemaCursosCreated from '../schemas/cursos/create.js';
import schemaCursosDelete from '../schemas/cursos/delete.js';
import schemaCursosUpdate from '../schemas/cursos/update.js';

const router = Router();

router.get('/all', allCursos);
router.get('/courseId/:x', courseById);
router.post('/create', validator(schemaCursosCreated), create);
router.put('/update', validator(schemaCursosUpdate), update); // PUT es para actualizar
router.delete('/deleteOne', validator(schemaCursosDelete), deleteOne) // DELETE es para eliminar

export default router;