import { Router } from "express";
import { ventasProductos } from "../controller/ventas.js";

// Crear una instancia del enrutador de Express
const router = Router();

router.post('/ventas/productos', ventasProductos);

export default router;