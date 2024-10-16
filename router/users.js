import { Router } from 'express';
import {allUsers, UserByRole} from '../controllers/users/read.js';
import {create} from '../controllers/users/create.js';

const router = Router()

router.get('/all', allUsers)
router.get('/role/:x', UserByRole)
router.post('/create', create)



export default router