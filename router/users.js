import { Router } from 'express';
import { allUsers, UserByRole } from '../controllers/users/read.js';
import { register } from '../controllers/users/register.js';
import { update } from '../controllers/proyectos/update.js';
import { deleteOne } from '../controllers/users/delete.js';
import { userById } from '../controllers/users/read.js';
import validator from '../middlewares/validator.js';
import schemaUsersCreated from '../schemas/users/create.js';
import schemaUsersDelete from '../schemas/users/delete.js';
import schemaUsersUpdate from '../schemas/users/update.js';
import accountExists from '../middlewares/accountExists.js';
import createHash from '../middlewares/createHash.js';
import passport from '../middlewares/passport.js';

const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allUsers) // GET es para obtener todos los usuarios
router.get('/role/:x', UserByRole)
router.post('/register', validator(schemaUsersCreated), accountExists, createHash, register)
router.put('/update', validator(schemaUsersUpdate), update) // PUT es para actualizar
router.delete('/deleteOne', validator(schemaUsersDelete), deleteOne) // DELETE es para eliminar
router.get('/userId/:x', userById) // GET es para obtener un usuario por su id


export default router