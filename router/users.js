import { Router } from 'express';
import {allUsers, UserByRole} from '../controllers/users/read.js';
import {create} from '../controllers/users/create.js';
import {update} from '../controllers/proyectos/update.js';
import {deleteOne} from '../controllers/users/delete.js';
import {userById} from '../controllers/users/read.js';
import validator from '../middlewares/validator.js';
import schemaUsersCreated from '../schemas/users/create.js';
import schemaUsersDelete from '../schemas/users/delete.js';
import schemaUsersUpdate from '../schemas/users/update.js';

const router = Router()

router.get('/all', allUsers)
router.get('/role/:x', UserByRole)
router.post('/create',validator(schemaUsersCreated), create)
router.put('/update', validator(schemaUsersUpdate), update) // PUT es para actualizar
router.delete('/deleteOne', validator(schemaUsersDelete), deleteOne) // DELETE es para eliminar
router.get('/userId/:x', userById) // GET es para obtener un usuario por su id


export default router