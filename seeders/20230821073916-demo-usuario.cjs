'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usuarios', [
    {
      nombre: 'Cesar',
      correo: 'cesar@gmail.com',
      password: 1234,
      role_id: 3
    },
    {
      nombre: 'Celeste',
      correo: 'celeste@hotmail.com',
      password: 1234,
      role_id: 2
    },
    {
      nombre: 'Manuel',
      correo: 'manuel@outlook.com',
      password: 1234,
      role_id: 1
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
