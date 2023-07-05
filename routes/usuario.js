import {Router} from 'express';
import { deleteUsuario, getUsuario, getUsuarioPorId, postUsuario, putUsuario } from '../controller/usuarios.js';

const router = Router();

router.get('/usuario', getUsuario);

router.post('/usuario', postUsuario);

router.put('/usuario/:id', putUsuario);

router.delete('/usuario/:id', deleteUsuario);

router.get('/usuario/:id', getUsuarioPorId);

export default router;