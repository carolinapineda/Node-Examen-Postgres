import {Router} from 'express';
import { deleteCategoria, getCategoria, getCategoriaPorId, postCategoria, putCategoria } from '../controller/categorias.js';

const router = Router();

router.get('/categoria', getCategoria);

router.post('/categoria', postCategoria);

router.put('/categoria/:id', putCategoria);

router.delete('/categoria/:id', deleteCategoria);

router.get('/categoria/:id', getCategoriaPorId);

export default router;