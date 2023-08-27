import {Router} from 'express';
import { altaProducto, deleteProducto, getProducto, getProductoPorId, infoProducto, infoProductoPorIdCategoria, postProducto, putProducto, ventaProductos } from '../controller/productos.js';

const router = Router();

// Ruta para tarer todos los productos
router.get('/producto', getProducto);

// Ruta para crear un producto 
router.post('/producto', postProducto);

// Ruta para actualizar un producto por medio de su id
router.put('/producto/:id', putProducto);

// Ruta para eliminar un producto por medio de su id 
router.delete('/producto/:id', deleteProducto);

// Ruta para traer un producto por medio de su id
router.get('/producto/:id', getProductoPorId);

// Ruta para traer informacion especifica de un producto
router.get('/info/producto', infoProducto);

// Ruta para traer informacion especifica por medio de su id
router.get('/info/producto/:id', infoProductoPorIdCategoria);

// Ruta para dar de alta un producto 
router.post('/alta/producto', altaProducto);

// Ruta para venta de productos 
router.post('/venta/producto', ventaProductos);

export default router;