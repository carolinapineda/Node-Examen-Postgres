import { resolve } from 'path';

export default {
  config: resolve('config', 'config.js'),     // Ruta a tu archivo de configuración de Sequelize
  'models-path': resolve( 'models'),    // Ruta a tus modelos
  'seeders-path': resolve('src'),  // Ruta a tus seeders
  'migrations-path': resolve('migrations')  // Ruta a tus migraciones
};