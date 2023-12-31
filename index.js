
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {sequelize} from './database/database.js';

import './models/categoria.js';
import './models/producto.js';
import './models/rol.js';
import './models/usuario.js';
import './models/ventas.js';

// Importamos las rutas a utilizar
import usuarioRoutes  from './routes/usuario.js'
import productoRoutes from './routes/producto.js'
import categoriaRoutes from './routes/categoria.js'
import ventasRoutes from './routes/ventas.js';

// Creacion de una instancia de la aplicacion Express
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Definir el puerto
const port = process.env.PORT;

// Configuracion de opciones cors
const corsOpcion = {
    origin: 'http://localhost:4001'
};

// Utilizamos el cors
app.use(cors(corsOpcion));

// Utilizamos las rutas
app.use(usuarioRoutes);
app.use(productoRoutes);
app.use(categoriaRoutes);
app.use(ventasRoutes);

async function main() { 
    try {
        // Sincronizacion a la base de datos
        await sequelize.sync({force: false})
        
        // Comprobar la conexion a la base de datos
        await sequelize.authenticate();
        console.log('La conexion a la base de datos se a establecido correctamente');

        // Ocupar el puerto
        app.listen(port , () => {
            console.log('El servidor esta corriendo en el puerto', port)
        }); 

    } catch (error) {
        console.log('no se puede conectar a la base de datos')
    }
}

main();
 