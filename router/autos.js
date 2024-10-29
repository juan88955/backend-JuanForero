import { Router } from 'express';   
import {allAutos, AutoByModelo} from '../controllers/autos/read.js';
import { create } from '../controllers/autos/create.js';
import { update } from '../controllers/autos/update.js';

const router = Router()

router.get('/all', allAutos)
router.get('/modelo/:x', AutoByModelo)
router.post('/create', create);
router.put('/update', update); // PUT es para actualizar


export default router