
import 'dotenv/config';
import express from 'express';
import {sequelize} from './database/database.js';

// import './models/categoria.js';
// import './models/producto.js';
// import './models/rol.js';
// import './models/usuario.js';

// Importamos las rutas a utilizar
import usuarioRoutes  from './routes/usuario.js'
import productoRoutes from './routes/producto.js'

const app = express();

// Middlewares
app.use(express.json());

// Definir el puerto
const port = process.env.PORT;

// Utilizamos las rutas
app.use(usuarioRoutes);
app.use(productoRoutes);

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
 