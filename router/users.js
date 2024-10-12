import { Router } from 'express';
import {allUsers, UserByRole} from '../controllers/users/read.js';

const router = Router()

router.get('/all', allUsers)
router.get('/role/:x', UserByRole)


export default router