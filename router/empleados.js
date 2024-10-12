import { Router } from 'express';
import { allEmpleados, EmpleadoByRole } from '../controllers/empleados/read.js';

const router = Router();

router.get('/all', allEmpleados);
router.get('/role/:x', EmpleadoByRole);

export default router;