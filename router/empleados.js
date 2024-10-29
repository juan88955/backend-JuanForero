import { Router } from 'express';
import { allEmpleados, EmpleadoByRole } from '../controllers/empleados/read.js';
import { create } from '../controllers/empleados/create.js';
import { update } from '../controllers/empleados/update.js';

const router = Router();

router.get('/all', allEmpleados);
router.get('/role/:x', EmpleadoByRole);
router.post('/create', create);
router.put('/update', update); // PUT es para actualizar

export default router;