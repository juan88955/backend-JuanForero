import { Router } from 'express';
import { allEmpleados, EmpleadoByRole } from '../controllers/empleados/read.js';
import { create } from '../controllers/empleados/create.js';
import { update } from '../controllers/empleados/update.js';
import { deleteOne } from '../controllers/empleados/delete.js';
import validator from '../middlewares/validator.js';
import schemaEmpleadosCreated from '../schemas/empleados/create.js';
import schemaEmpleadosDelete from '../schemas/empleados/delete.js';
import schemaEmpleadosUpdate from '../schemas/empleados/update.js';

const router = Router();

router.get('/all', allEmpleados);
router.get('/role/:x', EmpleadoByRole);
router.post('/create', validator(schemaEmpleadosCreated), create);
router.put('/update', validator(schemaEmpleadosUpdate), update); // PUT es para actualizar
router.delete('/deleteOne', validator(schemaEmpleadosDelete), deleteOne) // DELETE es para eliminar

export default router;