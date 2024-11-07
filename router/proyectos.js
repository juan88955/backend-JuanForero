import { Router } from 'express';
import { allProyectos, proyectosPorClientId } from '../controllers/proyectos/read.js';
import { create } from '../controllers/proyectos/create.js';
import { update } from '../controllers/proyectos/update.js';
import { deleteOne } from '../controllers/proyectos/delete.js';
import validator from '../middlewares/validator.js';
import schemaProyectosCreated from '../schemas/proyectos/create.js';
import schemaProyectosDelete from '../schemas/proyectos/delete.js';
import schemaProyectosUpdate from '../schemas/proyectos/update.js';

const router = Router();

router.get('/all', allProyectos);
router.get('/cliente/:x', proyectosPorClientId);
router.post('/create', validator(schemaProyectosCreated), create);
router.put('/update', validator(schemaProyectosUpdate), update); // PUT es para actualizar
router.delete('/deleteOne', validator(schemaProyectosDelete), deleteOne) // DELETE es para eliminar

export default router;