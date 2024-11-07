import { Router } from 'express';   
import {allAutos, AutoByModelo} from '../controllers/autos/read.js';
import { create } from '../controllers/autos/create.js';
import { update } from '../controllers/autos/update.js';
import { deleteOne } from '../controllers/autos/delete.js';
import validator from '../middlewares/validator.js';
import schemaAutosCreated from '../schemas/autos/create.js';
import schemaAutosDelete from '../schemas/autos/delete.js';
import schemaAutosUpdate from '../schemas/autos/update.js';


const router = Router()

router.get('/all', allAutos)
router.get('/modelo/:x', AutoByModelo)
router.post('/create', validator(schemaAutosCreated), create);
router.put('/update', validator(schemaAutosUpdate), update); // PUT es para actualizar
router.delete('/deleteOne', validator(schemaAutosDelete), deleteOne) // DELETE es para eliminar


export default router