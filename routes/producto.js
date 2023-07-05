import {Router} from 'express';
import { deleteProducto, getProducto, getProductoPorId, postProducto, putProducto } from '../controller/productos.js';

const router = Router();

router.get('/producto', getProducto);

router.post('/producto', postProducto);

router.put('/producto/:id', putProducto);

router.delete('/producto/:id', deleteProducto);

router.get('/producto/:id', getProductoPorId);

export default router;