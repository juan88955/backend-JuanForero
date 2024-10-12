import { Router } from 'express';
import {allAutos, AutoByModelo} from '../controllers/autos/read.js';

const router = Router()

router.get('/all', allAutos)
router.get('/modelo/:x', AutoByModelo)


export default router