import { resolve } from 'path';

export default {
  config: resolve('config', 'config.js'),     // Ruta a tu archivo de configuración de Sequelize
//   'models-path': resolve('src', 'models'),    // Ruta a tus modelos
  'seeders-path': resolve('src', 'seeders'),  // Ruta a tus seeders
//   'migrations-path': resolve('src', 'migrations')  // Ruta a tus migraciones
};