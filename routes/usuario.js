import {Router} from 'express';
import { deleteUsuario, getUsuario, getUsuarioPorId, postUsuario, putUsuario } from '../controller/usuarios.js';

// Crear una instancia del enrutador de Express
const router = Router();

// Ruta para traer todos los usuarios
router.get('/usuario', getUsuario);

// Ruta para crear un usuario
router.post('/usuario', postUsuario);

// Ruta para modificar un usuario
router.put('/usuario/:id', putUsuario);

// Ruta para borrar un usuario
router.delete('/usuario/:id', deleteUsuario);

// Ruta para traer un usuario por medio de su id
router.get('/usuario/:id', getUsuarioPorId);

// Ruta para traer a todos los usuarios pero con informacion especifica
router.get('/usuario/info', );

export default router;