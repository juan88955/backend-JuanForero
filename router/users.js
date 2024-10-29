import { Router } from 'express';
import {allUsers, UserByRole} from '../controllers/users/read.js';
import {create} from '../controllers/users/create.js';
import {update} from '../controllers/proyectos/update.js';
import {deleteOne} from '../controllers/users/delete.js';

const router = Router()

router.get('/all', allUsers)
router.get('/role/:x', UserByRole)
router.post('/create', create)
router.put('/update', update) // PUT es para actualizar
router.delete('/deleteOne', deleteOne) // DELETE es para eliminar


export default router